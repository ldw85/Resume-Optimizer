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
const pdfGeneratorService_1 = require("../services/pdfGeneratorService");
const router = express_1.default.Router();
router.post('/pdf', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { htmlContent } = req.body;
        if (!htmlContent) {
            return res.status(400).send('HTML content is required.');
        }
        const pdfBuffer = yield (0, pdfGeneratorService_1.generatePdfFromHtml)(htmlContent);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="modified-resume.pdf"');
        res.send(pdfBuffer);
    }
    catch (error) {
        console.error('Error in PDF download route:', error);
        res.status(500).send(`Failed to generate PDF: ${error.message}`);
    }
}));
exports.default = router;
//# sourceMappingURL=pdf.js.map