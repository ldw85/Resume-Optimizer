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
exports.userResumesRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_2 = require("@clerk/express"); // Correct Clerk import
const resumeService_1 = require("../services/resumeService"); // Import service functions
const router = express_1.default.Router();
exports.userResumesRouter = router;
// Middleware to protect routes and get user ID
router.use((0, express_2.clerkMiddleware)());
// POST /api/resumes - Save or update a resume
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = (0, resumeService_1.getUserId)(req);
        const { title, content } = req.body;
        const newResume = yield (0, resumeService_1.saveResume)(userId, title, content);
        res.status(201).json(newResume);
    }
    catch (error) {
        console.error('POST /api/resumes error:', error);
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
}));
// GET /api/resumes - Get user's saved resumes
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = (0, resumeService_1.getUserId)(req);
        const resumes = yield (0, resumeService_1.getResumes)(userId);
        res.status(200).json(resumes);
    }
    catch (error) {
        console.error('GET /api/resumes error:', error);
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
}));
// DELETE /api/resumes/:id - Delete a saved resume (Optional)
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = (0, resumeService_1.getUserId)(req);
        const resumeId = req.params.id;
        yield (0, resumeService_1.deleteResume)(userId, resumeId);
        res.status(204).send(); // No content on successful deletion
    }
    catch (error) {
        console.error('DELETE /api/resumes/:id error:', error);
        // Check if the error is due to not found or not owned
        if (error.message === 'Resume not found or not owned by user') {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message || 'Internal server error' });
    }
}));
//# sourceMappingURL=userResumes.js.map