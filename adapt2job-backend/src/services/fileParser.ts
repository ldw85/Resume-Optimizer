import pdfParse from 'pdf-parse';
import mammoth from 'mammoth';
import { createWorker } from 'tesseract.js';
import { Request, Response } from 'express';
import fs from 'fs';

// OCR语言配置
const OCR_LANGUAGES = ['eng', 'chi_sim']; // 支持英语和简体中文

export const parseFile = async (file: Express.Multer.File): Promise<string> => {
  console.log('Parsing file:', file.mimetype);
  try {
    if (file.mimetype === 'application/pdf') {
      // @ts-ignore // 忽略TypeScript错误，因为pdf-parse可能在运行时处理Buffer
      const data = await pdfParse(file.buffer);
      return data.text;
    } else if (
      file.mimetype ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
      if (!file.path) {
        throw new Error('File path is not available for docx processing');
      }
      const result = await mammoth.extractRawText({ path: file.path });
      return result.value;
    } else if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      const worker = await createWorker();
      await worker.reinitialize(OCR_LANGUAGES.join('+')); // 使用reinitialize加载和初始化语言

      let result;
      if (file.buffer) {
        // 如果有buffer，直接使用buffer
        result = await worker.recognize(file.buffer);
      } else if (file.path) {
        // 如果有path，使用文件路径
        result = await worker.recognize(file.path);
      } else {
        throw new Error('Neither buffer nor path is available for image processing');
      }

      const { data: { text } } = result;
      await worker.terminate();
      return text;
    } else {
      throw new Error('Unsupported file type');
    }
  } catch (error: any) {
    console.error('Error parsing file:', error);
    throw new Error(`Failed to parse file: ${error.message}`);
  }
};
