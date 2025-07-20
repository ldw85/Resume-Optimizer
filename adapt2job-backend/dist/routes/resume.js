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
const multer_1 = __importDefault(require("multer"));
const fileParser_1 = require("../services/fileParser");
const tesseractService_1 = require("../services/tesseractService");
const router = express_1.default.Router();
// 使用内存存储来处理文件上传，避免在 Vercel 等无文件系统权限的环境中出错
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
const parseResumeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            res.status(400).send({ message: 'No file uploaded' });
            return;
        }
        const text = yield (0, fileParser_1.parseFile)(req.file);
        res.status(200).send({ text });
    }
    catch (error) {
        console.error('Error parsing resume:', error);
        res.status(500).send({ message: error.message });
        return;
    }
});
router.post('/parse', upload.single('resume'), parseResumeHandler);
// 新增的图片解析路由
const parseResumeImagesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files || !Array.isArray(req.files)) {
            return res.status(400).json({ error: 'No files uploaded' });
        }
        // 获取共享的OCR worker
        const worker = yield (0, tesseractService_1.getOcrWorker)();
        let combinedText = '';
        // 处理每个图片文件
        for (const file of req.files) {
            // 检查文件类型
            if (!file.mimetype.startsWith('image/')) {
                console.warn(`Skipping non-image file: ${file.originalname} (${file.mimetype})`);
                continue;
            }
            try {
                // 直接使用worker进行识别
                const { data: { text } } = yield worker.recognize(file.buffer);
                combinedText += text.trim() + '\n';
            }
            catch (error) {
                console.error(`Error processing file ${file.originalname}:`, error);
            }
        }
        if (!combinedText.trim()) {
            return res.status(400).json({ error: 'No valid images were processed' });
        }
        // 返回合并后的文本
        res.json({ text: combinedText.trim() });
    }
    catch (error) {
        console.error('Error processing images:', error);
        res.status(500).json({ error: 'Failed to process images' });
    }
});
// 使用单一路由定义
router.post('/parse-resume-images', upload.array('files'), parseResumeImagesHandler);
exports.default = router;
//# sourceMappingURL=resume.js.map