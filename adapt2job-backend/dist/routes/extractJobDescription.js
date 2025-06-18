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
const llmService_1 = require("../services/llmService"); // Import the new function
const router = express_1.default.Router();
router.post('/api/extract-job-description', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rawContent } = req.body;
    if (!rawContent) {
        return res.status(400).json({ error: 'Missing rawContent in request body' });
    }
    try {
        // Call the new function in llmService to extract the job description
        const extractedDescription = yield (0, llmService_1.extractJobDescription)(rawContent);
        // Return the extracted description (or null if extraction failed)
        res.json({ jobDescription: extractedDescription });
    }
    catch (error) {
        console.error('Error extracting job description with LLM:', error);
        res.status(500).json({ error: 'Failed to extract job description with LLM' });
    }
}));
exports.default = router;
//# sourceMappingURL=extractJobDescription.js.map