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
exports.generatePdfFromHtml = generatePdfFromHtml;
const puppeteer_core_1 = __importDefault(require("puppeteer-core"));
const chrome_aws_lambda_1 = __importDefault(require("chrome-aws-lambda"));
/**
 * 将 HTML 字符串渲染为 PDF Buffer
 * @param htmlContent HTML 字符串
 * @returns PDF Buffer
 */
function generatePdfFromHtml(htmlContent) {
    return __awaiter(this, void 0, void 0, function* () {
        let browser;
        if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
            // Vercel/Serverless 环境
            browser = yield puppeteer_core_1.default.launch({
                args: chrome_aws_lambda_1.default.args,
                defaultViewport: chrome_aws_lambda_1.default.defaultViewport,
                executablePath: yield chrome_aws_lambda_1.default.executablePath,
                headless: chrome_aws_lambda_1.default.headless,
            });
        }
        else {
            // 本地开发环境
            const localPuppeteer = require('puppeteer');
            browser = yield localPuppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
            });
        }
        const page = yield browser.newPage();
        yield page.setContent(htmlContent, { waitUntil: 'networkidle0' });
        // 生成 PDF
        const pdfBuffer = yield page.pdf({
            format: 'A4',
            printBackground: true,
            margin: { top: '40px', bottom: '40px', left: '40px', right: '40px' },
        });
        yield browser.close();
        return Buffer.from(pdfBuffer);
    });
}
//# sourceMappingURL=pdfGeneratorService.js.map