import express from 'express';
import { clerkMiddleware } from '@clerk/express'; // Correct Clerk import
import { getUserId, saveResume, getResumes, deleteResume } from '../services/resumeService'; // Import service functions

const router = express.Router();

// Middleware to protect routes and get user ID
router.use(clerkMiddleware());

// POST /api/resumes - Save or update a resume
router.post('/', async (req, res) => {
  try {
    const userId = getUserId(req);
    const { title, content } = req.body;

    const newResume = await saveResume(userId, title, content);
    res.status(201).json(newResume);

  } catch (error: any) {
    console.error('POST /api/resumes error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
});

// GET /api/resumes - Get user's saved resumes
router.get('/', async (req, res) => {
  try {
    const userId = getUserId(req);

    const resumes = await getResumes(userId);
    res.status(200).json(resumes);

  } catch (error: any) {
    console.error('GET /api/resumes error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
});

// DELETE /api/resumes/:id - Delete a saved resume (Optional)
router.delete('/:id', async (req, res) => {
  try {
    const userId = getUserId(req);
    const resumeId = req.params.id;

    await deleteResume(userId, resumeId);
    res.status(204).send(); // No content on successful deletion

  } catch (error: any) {
    console.error('DELETE /api/resumes/:id error:', error);
    // Check if the error is due to not found or not owned
    if (error.message === 'Resume not found or not owned by user') {
       return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
});


export { router as userResumesRouter }; // Export with a specific name to avoid confusion with singular resume routes
