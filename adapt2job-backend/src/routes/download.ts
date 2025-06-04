import express, { Request, Response } from 'express';
import { generateDocxFromHtml } from '../services/docxGeneratorService';

const router: express.Router = express.Router();

router.post('/docx', async (req: Request, res: Response) => {
  try {
    const { htmlContent } = req.body;

    if (!htmlContent) {
      return res.status(400).send('HTML content is required.');
    }

    const docxBuffer = await generateDocxFromHtml(htmlContent);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', 'attachment; filename="modified-resume.docx"');
    res.send(docxBuffer);
  } catch (error: any) {
    console.error('Error in DOCX download route:', error);
    res.status(500).send(`Failed to generate DOCX: ${error.message}`);
  }
});

export default router;
