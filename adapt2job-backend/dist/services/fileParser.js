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
exports.parseFile = void 0;
const pdf_parse_1 = __importDefault(require("pdf-parse"));
const mammoth_1 = __importDefault(require("mammoth"));
const tesseractService_1 = require("./tesseractService");
const parseFile = (file) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Parsing file:', file.mimetype);
    try {
        if (!file.buffer) {
            throw new Error('File buffer is not available. Ensure multer is configured for memory storage.');
        }
        if (file.mimetype === 'application/pdf') {
            // @ts-ignore // 忽略TypeScript错误，因为pdf-parse可能在运行时处理Buffer
            const data = yield (0, pdf_parse_1.default)(file.buffer);
            return data.text;
        }
        else if (file.mimetype ===
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            const result = yield mammoth_1.default.extractRawText({ buffer: file.buffer });
            return result.value;
        }
        else if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            // 从共享服务中获取已初始化的worker
            const worker = yield (0, tesseractService_1.getOcrWorker)();
            const { data: { text } } = yield worker.recognize(file.buffer);
            return text;
        }
        else {
            throw new Error(`Unsupported file type: ${file.mimetype}`);
        }
    }
    catch (error) {
        console.error('Error parsing file:', error);
        throw new Error(`Failed to parse file: ${error.message}`);
    }
});
exports.parseFile = parseFile;
//# sourceMappingURL=fileParser.js.map