import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors, { CorsOptions } from 'cors';
import resumeRoutes from './routes/resume';
import llmRoutes from './routes/llm';
import downloadRoutes from './routes/download'; // Import the new download route
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const corsOptions: CorsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api', resumeRoutes);
app.use('/api', llmRoutes);
app.use('/api/download', downloadRoutes); // Register the new download route

//console.log('Express app configured and routes applied.');

app.get('/', (req: Request, res: Response) => {
  res.send('ResumeOptimizer Backend is running!');
});

export default app;
