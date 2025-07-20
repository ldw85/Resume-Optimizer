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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOcrWorker = void 0;
const tesseract_js_1 = require("tesseract.js");
// OCR语言配置
const OCR_LANGUAGES = ['eng', 'chi_sim']; // 支持英语和简体中文
let worker = null;
let workerInitializationPromise = null;
const initializeWorker = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Initializing Tesseract worker...');
    // In a Node.js environment, tesseract.js will automatically resolve the necessary files
    // from its own dependencies in node_modules. Explicitly setting paths is typically
    // for browser-based or CDN usage.
    const newWorker = yield (0, tesseract_js_1.createWorker)(OCR_LANGUAGES);
    console.log('Tesseract worker initialized.');
    return newWorker;
});
const getOcrWorker = () => {
    if (!workerInitializationPromise) {
        workerInitializationPromise = initializeWorker();
    }
    return workerInitializationPromise;
};
exports.getOcrWorker = getOcrWorker;
//# sourceMappingURL=tesseractService.js.map