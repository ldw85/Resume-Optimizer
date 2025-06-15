import express, { Request, Response, Router, RequestHandler } from 'express';
import multer from 'multer';
import { createWorker } from 'tesseract.js';
import fs from 'fs/promises';
import path from 'path';
import { parseFile } from '../services/fileParser';

const router: Router = express.Router();

// 确保上传目录存在
const uploadDir = path.join(__dirname, '../../uploads');
// 确保上传目录存在
// 使用 async/await 确保目录创建完成
(async () => {
  try {
    await fs.access(uploadDir);
  } catch (error) {
    await fs.mkdir(uploadDir, { recursive: true });
  }
})();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const parseResumeHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).send({ message: 'No file uploaded' });
      return;
    }

    const text = await parseFile(req.file);
    res.status(200).send({ text });

    // 删除临时文件
    if (req.file && req.file.path) {
      try {
        await fs.unlink(req.file.path);
        console.log(`Deleted temporary file: ${req.file.path}`);
      } catch (unlinkError) {
        console.warn(`Failed to delete temporary file: ${req.file.path}`, unlinkError);
      }
    }

    return;
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

    let combinedText = '';

    // 处理每个图片文件
    for (const file of (req.files as Express.Multer.File[])) {
      // 检查文件类型
      if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
        console.warn(`Skipping non-image file: ${file.originalname} (${file.mimetype})`);
        continue;
      }

      try {
        // 使用现有的parseFile服务处理图片
        const pageText = await parseFile(file);
        combinedText += pageText.trim() + '\n';

        // 处理完成后删除临时文件
        await fs.unlink(file.path);
      } catch (error) {
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
