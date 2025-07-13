import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors, { CorsOptions } from 'cors';
import resumeRoutes from './routes/resume';
import llmRoutes from './routes/llm';
import downloadRoutes from './routes/download'; // Import the new download route
import pdfRoutes from './routes/pdf'; // 新增 PDF 路由
import feedbackRoutes from './routes/feedback'; // Import the new feedback route
import { userResumesRouter } from './routes/userResumes'; // Import the user resumes router
import userRoutes from './routes/userRoutes'; // Import the new user routes
import dotenv from 'dotenv';
dotenv.config();

import extractJobDescriptionRoutes from './routes/extractJobDescription'; // Import the new route

const app: Express = express();
const port = process.env.PORT || 3000;

const corsOptions: CorsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/resume', resumeRoutes);
app.use('/api', llmRoutes);
app.use('/api/download', downloadRoutes); // Register the new download route
app.use('/api/download', pdfRoutes); // 注册 PDF 路由
app.use('/api', feedbackRoutes); // Register the new feedback route
app.use('/api/resumes', userResumesRouter); // Register the new resumes route
app.use('/api/user', userRoutes); // Register the new user routes
app.use(extractJobDescriptionRoutes); // Register the new route

//console.log('Express app configured and routes applied.');

app.get('/', (req: Request, res: Response) => {
  res.send('ResumeOptimizer Backend is running!');
});

export default app;
