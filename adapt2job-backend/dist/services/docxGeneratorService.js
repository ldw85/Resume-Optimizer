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
        const docxBuffer = yield (0, html_to_docx_1.default)(htmlContent, null, {
            font: 'Arial', // Set global font
            fontSize: 24, // Set global font size to 12pt (24 HIP)
            // You can add other options here if needed
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