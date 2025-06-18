import express from 'express';
import { extractJobDescription } from '../services/llmService'; // Import the new function

const router = express.Router();

router.post('/api/extract-job-description', async (req, res) => {
  const { rawContent } = req.body;

  if (!rawContent) {
    return res.status(400).json({ error: 'Missing rawContent in request body' });
  }

  try {
    // Call the new function in llmService to extract the job description
    const extractedDescription = await extractJobDescription(rawContent);

    // Return the extracted description (or null if extraction failed)
    res.json({ jobDescription: extractedDescription });

  } catch (error) {
    console.error('Error extracting job description with LLM:', error);
    res.status(500).json({ error: 'Failed to extract job description with LLM' });
  }
});

export default router;
