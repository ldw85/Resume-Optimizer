import express, { Request, Response } from 'express';
import { analyzeResumeWithLLM } from '../services/llmService';
import { callTavilyAPI } from '../services/tavilyService';

const router = express.Router();

router.post('/analyze-resume', async (req: Request, res: Response) => {
  try {
    const { resumeText, jobDescriptionText, llmType = 'gemini' } = req.body;
    const analysisResult = await analyzeResumeWithLLM(llmType, resumeText, jobDescriptionText);
    res.status(200).json(analysisResult);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/fetch-url-content', async (req: Request, res: Response) => {
  try {
    const { url } = req.query;
    const urlString = String(url);
    const tavilyResult = await callTavilyAPI(urlString);
    res.status(200).json(tavilyResult);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
