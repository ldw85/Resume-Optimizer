import { createWorker, Worker } from 'tesseract.js';
import path from 'path';


// OCR语言配置
const OCR_LANGUAGES = ['eng', 'chi_sim']; // 支持英语和简体中文

let worker: Worker | null = null;
let workerInitializationPromise: Promise<Worker> | null = null;

const initializeWorker = async (): Promise<Worker> => {
  console.log('Initializing Tesseract worker...');
  // In a Node.js environment, tesseract.js will automatically resolve the necessary files
  // from its own dependencies in node_modules. Explicitly setting paths is typically
  // for browser-based or CDN usage.
  const newWorker = await createWorker(OCR_LANGUAGES);

  console.log('Tesseract worker initialized.');
  return newWorker;
};

export const getOcrWorker = (): Promise<Worker> => {
  if (!workerInitializationPromise) {
    workerInitializationPromise = initializeWorker();
  }
  return workerInitializationPromise;
};