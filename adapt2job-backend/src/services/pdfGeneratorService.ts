import puppeteer from 'puppeteer-core';
import chromium from 'chrome-aws-lambda';

/**
 * 将 HTML 字符串渲染为 PDF Buffer
 * @param htmlContent HTML 字符串
 * @returns PDF Buffer
 */
export async function generatePdfFromHtml(htmlContent: string): Promise<Buffer> {
  let browser;
  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    // Vercel/Serverless 环境
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });
  } else {
    // 本地开发环境
    const localPuppeteer = require('puppeteer');
    browser = await localPuppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  }
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
