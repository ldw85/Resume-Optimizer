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
const feedbackDbService_1 = require("../services/feedbackDbService");
const router = express_1.default.Router();
router.post('/feedback', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comment, userId } = req.body;
    if (!comment || !userId) {
        return res.status(400).json({ error: 'Comment and userId are required.' });
    }
    try {
        yield (0, feedbackDbService_1.insertFeedback)(comment, userId);
        res.status(201).json({ message: 'Feedback submitted successfully.' });
    }
    catch (error) {
        console.error('Failed to submit feedback:', error);
        res.status(500).json({ error: error.message || 'Failed to submit feedback.' });
    }
}));
exports.default = router;
//# sourceMappingURL=feedback.js.map