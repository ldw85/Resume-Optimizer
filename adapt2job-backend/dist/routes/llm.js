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
const express_1 = __importDefault(require("express"));
const llmService_1 = require("../services/llmService");
const tavilyService_1 = require("../services/tavilyService");
const router = express_1.default.Router();
router.post('/analyze-resume', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { resumeText, jobDescriptionText, llmType = 'gemini' } = req.body;
        const analysisResult = yield (0, llmService_1.analyzeResumeWithLLM)(llmType, resumeText, jobDescriptionText);
        res.status(200).json(analysisResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}));
router.get('/fetch-url-content', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { url } = req.query;
        const urlString = String(url);
        const tavilyResult = yield (0, tavilyService_1.callTavilyAPI)(urlString);
        res.status(200).json(tavilyResult);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}));
exports.default = router;
//# sourceMappingURL=llm.js.map