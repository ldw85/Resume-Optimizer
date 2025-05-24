import pdfParse from 'pdf-parse';
import mammoth from 'mammoth';
import { Request, Response } from 'express';

export const parseFile = async (file: Express.Multer.File): Promise<string> => {
  try {
    if (file.mimetype === 'application/pdf') {
      const buffer = file.buffer;
      const data = await pdfParse(buffer);
      return data.text;
    } else if (
      file.mimetype ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      const buffer = file.buffer;
      const result = await mammoth.extractRawText({ buffer: buffer });
      return result.value;
    } else {
      throw new Error('Unsupported file type');
    }
  } catch (error: any) {
    console.error('Error parsing file:', error);
    throw new Error(`Failed to parse file: ${error.message}`);
  }
};
