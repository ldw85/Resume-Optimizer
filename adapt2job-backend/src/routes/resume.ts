import express, { Request, Response, Router, RequestHandler } from 'express';
import multer from 'multer';
import { parseFile } from '../services/fileParser';
import { getOcrWorker } from '../services/tesseractService';

const router: Router = express.Router();

// 使用内存存储来处理文件上传，避免在 Vercel 等无文件系统权限的环境中出错
const storage = multer.memoryStorage();

const upload = multer({ storage });

const parseResumeHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).send({ message: 'No file uploaded' });
      return;
    }

    const text = await parseFile(req.file);
    res.status(200).send({ text });
  } catch (error: any) {
    console.error('Error parsing resume:', error);
    res.status(500).send({ message: error.message });
    return;
  }
};

router.post('/parse', upload.single('resume'), parseResumeHandler);

// 新增的图片解析路由
const parseResumeImagesHandler: RequestHandler = async (req, res) => {
  try {
    if (!req.files || !Array.isArray(req.files)) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    // 获取共享的OCR worker
    const worker = await getOcrWorker();
    let combinedText = '';

    // 处理每个图片文件
    for (const file of (req.files as Express.Multer.File[])) {
      // 检查文件类型
      if (!file.mimetype.startsWith('image/')) {
        console.warn(`Skipping non-image file: ${file.originalname} (${file.mimetype})`);
        continue;
      }

      try {
        // 直接使用worker进行识别
        const { data: { text } } = await worker.recognize(file.buffer);
        combinedText += text.trim() + '\n';
      } catch (error: any) {
        console.error(`Error processing file ${file.originalname}:`, error);
      }
    }

    if (!combinedText.trim()) {
      return res.status(400).json({ error: 'No valid images were processed' });
    }

    // 返回合并后的文本
    res.json({ text: combinedText.trim() });
  } catch (error) {
    console.error('Error processing images:', error);
    res.status(500).json({ error: 'Failed to process images' });
  }
};

// 使用单一路由定义
router.post('/parse-resume-images', upload.array('files'), parseResumeImagesHandler);

export default router;
