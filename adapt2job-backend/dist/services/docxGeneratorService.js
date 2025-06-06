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
exports.generateDocxFromHtml = void 0;
const html_to_docx_1 = __importDefault(require("html-to-docx"));
const generateDocxFromHtml = (htmlContent) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Preprocess HTML to replace custom div-based horizontal rules with <hr> tags
        // This is more likely to be correctly interpreted by html-to-docx for horizontal lines.
        const preprocessedHtmlContent = htmlContent.replace(/<div style="border-bottom: 1px solid #ddd; margin-bottom: 20px;"><\/div>/g, '<hr style="border: none; border-bottom: 1px solid #ddd; margin-bottom: 20px;">');
        const docxBuffer = yield (0, html_to_docx_1.default)(preprocessedHtmlContent, null, {
            font: 'Calibri', // Set a good-looking and Word-recognizable English font
            fontSize: 24, // Set global font size to 12pt (24 HIP)
            // html-to-docx might not fully support complex CSS properties like box-shadow or div borders for the entire document.
            // For the main div border and box-shadow, these are typically not directly transferable to DOCX via simple HTML conversion.
            // Advanced DOCX templating or custom styles might be required for full fidelity.
        });
        return Buffer.from(docxBuffer);
    }
    catch (error) {
        console.error('Error generating DOCX from HTML:', error);
        throw new Error(`Failed to generate DOCX: ${error.message}`);
    }
});
exports.generateDocxFromHtml = generateDocxFromHtml;
//# sourceMappingURL=docxGeneratorService.js.map