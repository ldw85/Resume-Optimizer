import pdfParse from 'pdf-parse';
import mammoth from 'mammoth';
import { getOcrWorker } from './tesseractService';

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
      // 从共享服务中获取已初始化的worker
      const worker = await getOcrWorker();
      const { data: { text } } = await worker.recognize(file.buffer);
      return text;
    } else {
      throw new Error(`Unsupported file type: ${file.mimetype}`);
    }
  } catch (error: any) {
    console.error('Error parsing file:', error);
    throw new Error(`Failed to parse file: ${error.message}`);
  }
};
