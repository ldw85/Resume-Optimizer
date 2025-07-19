import pdfParse from 'pdf-parse';
import mammoth from 'mammoth';
import { createWorker } from 'tesseract.js';

// OCR语言配置
const OCR_LANGUAGES = ['eng', 'chi_sim']; // 支持英语和简体中文

export const parseFile = async (file: Express.Multer.File): Promise<string> => {
  console.log('Parsing file:', file.mimetype);
  try {
    if (!file.buffer) {
      throw new Error('File buffer is not available. Ensure multer is configured for memory storage.');
    }

    if (file.mimetype === 'application/pdf') {
      // @ts-ignore // 忽略TypeScript错误，因为pdf-parse可能在运行时处理Buffer
      const data = await pdfParse(file.buffer);
      return data.text;
    } else if (
      file.mimetype ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      const result = await mammoth.extractRawText({ buffer: file.buffer });
      return result.value;
    } else if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      const worker = await createWorker();
      await worker.reinitialize(OCR_LANGUAGES.join('+')); // 使用reinitialize加载和初始化语言

      const { data: { text } } = await worker.recognize(file.buffer);
      await worker.terminate();
      return text;
    } else {
      throw new Error(`Unsupported file type: ${file.mimetype}`);
    }
  } catch (error: any) {
    console.error('Error parsing file:', error);
    throw new Error(`Failed to parse file: ${error.message}`);
  }
};
