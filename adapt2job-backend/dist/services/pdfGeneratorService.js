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
exports.generatePdfFromHtml = generatePdfFromHtml;
const pdf_lib_1 = require("pdf-lib");
/**
 * 将 HTML 字符串渲染为 PDF Buffer
 * @param htmlContent HTML 字符串
 * @returns PDF Buffer
 */
function generatePdfFromHtml(htmlContent) {
    return __awaiter(this, void 0, void 0, function* () {
        // 使用 pdf-lib 生成 PDF，简单去除 HTML 标签，仅保留文本
        const pdfDoc = yield pdf_lib_1.PDFDocument.create();
        const page = pdfDoc.addPage([595.28, 841.89]); // A4尺寸
        const font = yield pdfDoc.embedFont(pdf_lib_1.StandardFonts.Helvetica);
        // 简单去除 HTML 标签，仅保留文本（可根据实际情况优化）
        const text = htmlContent.replace(/<[^>]+>/g, '');
        // 样式设置
        const fontSize = 12;
        const margin = 40;
        const maxWidth = page.getWidth() - margin * 2;
        // 自动换行
        const lines = [];
        text.split('\n').forEach((paragraph) => {
            let line = '';
            paragraph.split(' ').forEach((word) => {
                const testLine = line ? line + ' ' + word : word;
                const width = font.widthOfTextAtSize(testLine, fontSize);
                if (width > maxWidth) {
                    lines.push(line);
                    line = word;
                }
                else {
                    line = testLine;
                }
            });
            if (line)
                lines.push(line);
            lines.push(''); // 段落间空行
        });
        // 写入内容
        let y = page.getHeight() - margin;
        for (const line of lines) {
            if (y < margin)
                break;
            page.drawText(line, {
                x: margin,
                y,
                size: fontSize,
                font,
                color: (0, pdf_lib_1.rgb)(0, 0, 0),
                maxWidth,
            });
            y -= fontSize + 4;
        }
        const pdfBytes = yield pdfDoc.save();
        return Buffer.from(pdfBytes);
    });
}
//# sourceMappingURL=pdfGeneratorService.js.map