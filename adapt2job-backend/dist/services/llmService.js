"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeResumeWithLLM = void 0;
const gemini_prompt_1 = __importDefault(require("../prompts/gemini.prompt"));
// TODO: Implement analyze resume with Gemini
const callGeminiAPI = (apiKey, resumeText, jobDescriptionText) => __awaiter(void 0, void 0, void 0, function* () {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`; // 假设的 Gemini API 端点
    try {
        let prompt = gemini_prompt_1.default;
        prompt = prompt.replace('{{resumeText}}', resumeText);
        prompt = prompt.replace('{{jobDescriptionText}}', jobDescriptionText);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 600000); // 10分钟超时
        const response = yield fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                        parts: [
                            { text: prompt }
                        ]
                    }]
            }),
            signal: controller.signal,
        });
        clearTimeout(timeoutId);
        if (!response.ok) {
            console.error('Gemini API request failed with status', response.status, response.statusText);
            const errorText = yield response.text();
            console.error('Gemini API error response:', errorText);
            throw new Error('Gemini API request failed with status ' + response.status);
        }
        try {
            const responseData = yield response.json();
            const candidates = responseData.candidates;
            if (candidates && candidates.length > 0) {
                const text = candidates[0].content.parts[0].text;
                //console.log('Gemini API raw response text:', text);
                let jsonString = '';
                const jsonMatch = text.match(/\$\$\$json([\s\S]*?)\$\$\$/);
                if (jsonMatch && jsonMatch[1]) {
                    jsonString = jsonMatch[1].trim();
                    //console.log('Extracted JSON using $$$json markers:', jsonString);
                }
                else {
                    // Fallback to common markdown code block if $$$json markers are not found
                    const markdownMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
                    if (markdownMatch && markdownMatch[1]) {
                        jsonString = markdownMatch[1].trim();
                        //console.log('Extracted JSON using markdown code block:', jsonString);
                    }
                    else {
                        // Fallback to looking for '''json markers
                        const tripleQuoteMatch = text.match(/'''(?:json)?\s*([\s\S]*?)'''/);
                        if (tripleQuoteMatch && tripleQuoteMatch[1]) {
                            jsonString = tripleQuoteMatch[1].trim();
                            //console.log('Extracted JSON using triple quote code block:', jsonString);
                        }
                        else {
                            // As a last resort, try to find the first and last curly braces
                            const firstBrace = text.indexOf('{');
                            const lastBrace = text.lastIndexOf('}');
                            if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
                                jsonString = text.substring(firstBrace, lastBrace + 1);
                                //console.log('Extracted JSON using curly braces fallback:', jsonString);
                            }
                            else {
                                console.warn('Could not find any recognizable JSON markers or curly braces.');
                            }
                        }
                    }
                }
                if (jsonString) {
                    try {
                        // Remove control characters before parsing
                        // eslint-disable-next-line no-control-regex
                        const cleanedJsonString = jsonString.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
                        const jsonData = JSON.parse(cleanedJsonString);
                        //console.log('Parsed JSON data:', jsonData);
                        return jsonData;
                    }
                    catch (parseError) {
                        console.error('JSON parse error:', parseError);
                        // Return a default object conforming to AnalysisResponse structure
                        return {
                            modificationIdeas: 'Error parsing Gemini response JSON.',
                            contentExplanation: '',
                            modifiedResume: '',
                        };
                    }
                }
                else {
                    console.warn('No parsable JSON string extracted from Gemini response.');
                    // Return a default object conforming to AnalysisResponse structure
                    return {
                        modificationIdeas: 'No analysis result from Gemini.',
                        contentExplanation: '',
                        modifiedResume: '',
                    };
                }
            }
            else {
                console.warn('No candidates found in Gemini response.');
                // Return a default object conforming to AnalysisResponse structure
                return {
                    modificationIdeas: 'No analysis result from Gemini.',
                    contentExplanation: '',
                    modifiedResume: '',
                };
            }
        }
        catch (jsonError) {
            console.error('Error processing Gemini API response:', jsonError);
            const errorText = yield response.text();
            console.error('Gemini API raw response:', errorText);
            throw jsonError; // Re-throw the error to be caught by the outer catch block
        }
    }
    catch (error) {
        console.error('Gemini API call error:', error);
        if (error instanceof Error) {
            throw error;
        }
        else {
            throw new Error('An unknown error occurred during Gemini API call.');
        }
    }
});
const analyzeResumeWithGemini = (resumeText, jobDescriptionText) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Implement analyze resume with Gemini
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error('Gemini API key not found in environment variables.');
    }
    return yield callGeminiAPI(apiKey, resumeText, jobDescriptionText);
});
const preparePrompt = (prompt, resumeText, jobDescriptionText) => {
    let preparedPrompt = prompt;
    preparedPrompt = preparedPrompt.replace('{{resumeText}}', resumeText);
    preparedPrompt = preparedPrompt.replace('{{jobDescriptionText}}', jobDescriptionText);
    return preparedPrompt;
};
const analyzeResumeWithDeepSeek = (resumeText, jobDescriptionText) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const deepSeekEndpoint = 'https://api.deepseek.com/chat/completions';
    const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
    try {
        // 使用封装的方法准备 prompt
        const prompt = preparePrompt(gemini_prompt_1.default, resumeText, jobDescriptionText);
        const response = yield fetch(deepSeekEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant specializing in resume analysis and improvement.' },
                    { role: 'user', content: prompt },
                ],
                stream: false,
            }),
        });
        if (!response.ok) {
            throw new Error(`DeepSeek API error: ${response.status} - ${response.statusText}`);
        }
        const data = yield response.json();
        const contentString = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.choices) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.content;
        if (contentString) {
            try {
                const jsonString = contentString.substring(contentString.indexOf('$$$json') + 7, contentString.lastIndexOf('$$$'));
                // 移除控制字符
                // eslint-disable-next-line no-control-regex
                const cleanedContentString = jsonString.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
                const content = JSON.parse(cleanedContentString);
                return {
                    modifiedResume: (content === null || content === void 0 ? void 0 : content.modifiedResume) || '',
                    modificationIdeas: (content === null || content === void 0 ? void 0 : content.modificationIdeas) || '',
                    contentExplanation: (content === null || content === void 0 ? void 0 : content.contentExplanation) || '',
                };
            }
            catch (parseError) {
                console.error('JSON parse error:', parseError);
                return {
                    modificationIdeas: 'Error parsing DeepSeek response JSON.',
                    contentExplanation: '',
                    modifiedResume: '',
                };
            }
        }
        else {
            console.warn('No content found in DeepSeek response.');
            return {
                modificationIdeas: 'No analysis result from DeepSeek.',
                contentExplanation: '',
                modifiedResume: '',
            };
        }
    }
    catch (error) {
        console.error('DeepSeek API call failed:', error);
        if (error instanceof Error) {
            throw error;
        }
        else {
            throw new Error('An unknown error occurred during DeepSeek API call.');
        }
    }
});
// TODO: Implement analyze resume with LLM
const analyzeResumeWithLLM = (llmType, resumeText, jobDescriptionText) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (llmType === 'gemini') {
            return yield analyzeResumeWithGemini(resumeText, jobDescriptionText);
        }
        else if (llmType === 'deepseek') {
            return yield analyzeResumeWithDeepSeek(resumeText, jobDescriptionText);
        }
        else {
            throw new Error(`Unsupported LLM type: ${llmType}`);
        }
    }
    catch (error) {
        console.error(`LLM ${llmType} analysis failed:`, error);
        throw error;
    }
});
exports.analyzeResumeWithLLM = analyzeResumeWithLLM;
//# sourceMappingURL=llmService.js.map