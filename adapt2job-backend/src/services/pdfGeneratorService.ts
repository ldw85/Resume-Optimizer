
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

/**
 * 将 HTML 字符串渲染为 PDF Buffer
 * @param htmlContent HTML 字符串
 * @returns PDF Buffer
 */
export async function generatePdfFromHtml(htmlContent: string): Promise<Buffer> {
  // 使用 pdf-lib 生成 PDF，简单去除 HTML 标签，仅保留文本
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4尺寸
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // 简单去除 HTML 标签，仅保留文本（可根据实际情况优化）
  const text: string = htmlContent.replace(/<[^>]+>/g, '');

  // 样式设置
  const fontSize = 12;
  const margin = 40;
  const maxWidth = page.getWidth() - margin * 2;

  // 自动换行
  const lines: string[] = [];
  text.split('\n').forEach((paragraph: string) => {
    let line = '';
    paragraph.split(' ').forEach((word: string) => {
      const testLine = line ? line + ' ' + word : word;
      const width = font.widthOfTextAtSize(testLine, fontSize);
      if (width > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = testLine;
      }
    });
    if (line) lines.push(line);
    lines.push(''); // 段落间空行
  });

  // 写入内容
  let y = page.getHeight() - margin;
  for (const line of lines) {
    if (y < margin) break;
    page.drawText(line, {
      x: margin,
      y,
      size: fontSize,
      font,
      color: rgb(0, 0, 0),
      maxWidth,
    });
    y -= fontSize + 4;
  }

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}
