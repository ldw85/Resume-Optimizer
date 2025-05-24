import express, { Request, Response, Router, RequestHandler } from 'express';
import multer from 'multer';
import { parseFile } from '../services/fileParser';

const router: Router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const parseResumeHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).send({ message: 'No file uploaded' });
      return;
    }

    const text = await parseFile(req.file);
    res.status(200).send({ text });
    return;
  } catch (error: any) {
    console.error('Error parsing resume:', error);
    res.status(500).send({ message: error.message });
    return;
  }
};

router.post('/parse-resume', upload.single('resume'), parseResumeHandler);

export default router;
