import puppeteer from 'puppeteer';

/**
 * 将 HTML 字符串渲染为 PDF Buffer
 * @param htmlContent HTML 字符串
 * @returns PDF Buffer
 */
export async function generatePdfFromHtml(htmlContent: string): Promise<Buffer> {
  // puppeteer 启动无头浏览器
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  // 生成 PDF
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: '40px', bottom: '40px', left: '40px', right: '40px' },
  });
  await browser.close();
  return Buffer.from(pdfBuffer);
}
