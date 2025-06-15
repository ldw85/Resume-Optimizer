import express from 'express';
import { insertFeedback } from '../services/feedbackDbService';

const router = express.Router();

router.post('/feedback', async (req, res) => {
  const { comment, userId } = req.body;

  if (!comment || !userId) {
    return res.status(400).json({ error: 'Comment and userId are required.' });
  }

  try {
    await insertFeedback(comment, userId);
    res.status(201).json({ message: 'Feedback submitted successfully.' });
  } catch (error: any) {
    console.error('Failed to submit feedback:', error);
    res.status(500).json({ error: error.message || 'Failed to submit feedback.' });
  }
});

export default router;
