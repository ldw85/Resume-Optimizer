import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors, { CorsOptions } from 'cors';
import resumeRoutes from './routes/resume';
import llmRoutes from './routes/llm';
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

app.get('/', (req: Request, res: Response) => {
  res.send('ResumeOptimizer Backend is running!');
});

export default app;
