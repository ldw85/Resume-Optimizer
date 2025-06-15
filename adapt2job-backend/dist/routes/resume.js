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
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const fileParser_1 = require("../services/fileParser");
const router = express_1.default.Router();
// 确保上传目录存在
const uploadDir = path_1.default.join(__dirname, '../../uploads');
// 确保上传目录存在
// 使用 async/await 确保目录创建完成
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield promises_1.default.access(uploadDir);
    }
    catch (error) {
        yield promises_1.default.mkdir(uploadDir, { recursive: true });
    }
}))();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
const parseResumeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            res.status(400).send({ message: 'No file uploaded' });
            return;
        }
        const text = yield (0, fileParser_1.parseFile)(req.file);
        res.status(200).send({ text });
        return;
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
        let combinedText = '';
        // 处理每个图片文件
        for (const file of req.files) {
            // 检查文件类型
            if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
                console.warn(`Skipping non-image file: ${file.originalname} (${file.mimetype})`);
                continue;
            }
            try {
                // 使用现有的parseFile服务处理图片
                const pageText = yield (0, fileParser_1.parseFile)(file);
                combinedText += pageText.trim() + '\n';
                // 处理完成后删除临时文件
                yield promises_1.default.unlink(file.path);
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