import express, { Request, Response } from 'express';
import { generatePdfFromHtml } from '../services/pdfGeneratorService';

const router = express.Router();

router.post('/pdf', async (req: Request, res: Response) => {
  try {
    const { htmlContent } = req.body;
    if (!htmlContent) {
      return res.status(400).send('HTML content is required.');
    }
    const pdfBuffer = await generatePdfFromHtml(htmlContent);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="modified-resume.pdf"');
    res.send(pdfBuffer);
  } catch (error: any) {
    console.error('Error in PDF download route:', error);
    res.status(500).send(`Failed to generate PDF: ${error.message}`);
  }
});

export default router;
