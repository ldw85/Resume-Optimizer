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
const tesseract_js_1 = require("tesseract.js");
// OCR语言配置
const OCR_LANGUAGES = ['eng', 'chi_sim']; // 支持英语和简体中文
const parseFile = (file) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Parsing file:', file.mimetype);
    try {
        if (file.mimetype === 'application/pdf') {
            // @ts-ignore // 忽略TypeScript错误，因为pdf-parse可能在运行时处理Buffer
            const data = yield (0, pdf_parse_1.default)(file.buffer);
            return data.text;
        }
        else if (file.mimetype ===
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            if (!file.path) {
                throw new Error('File path is not available for docx processing');
            }
            const result = yield mammoth_1.default.extractRawText({ path: file.path });
            return result.value;
        }
        else if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            const worker = yield (0, tesseract_js_1.createWorker)();
            yield worker.reinitialize(OCR_LANGUAGES.join('+')); // 使用reinitialize加载和初始化语言
            let result;
            if (file.buffer) {
                // 如果有buffer，直接使用buffer
                result = yield worker.recognize(file.buffer);
            }
            else if (file.path) {
                // 如果有path，使用文件路径
                result = yield worker.recognize(file.path);
            }
            else {
                throw new Error('Neither buffer nor path is available for image processing');
            }
            const { data: { text } } = result;
            yield worker.terminate();
            return text;
        }
        else {
            throw new Error('Unsupported file type');
        }
    }
    catch (error) {
        console.error('Error parsing file:', error);
        throw new Error(`Failed to parse file: ${error.message}`);
    }
});
exports.parseFile = parseFile;
//# sourceMappingURL=fileParser.js.map