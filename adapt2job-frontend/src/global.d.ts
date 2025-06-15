import { Clerk } from '@clerk/clerk-js';

declare global {
  interface Window {
    Clerk: Clerk;
  }
}

declare module 'pdfjs-dist' {
  const pdfjs: any;
  export = pdfjs;
}

declare module 'pdfjs-dist/build/pdf.worker.entry';