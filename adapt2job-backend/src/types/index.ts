import { Request } from 'express';

// Augment the Request type to include Clerk's auth property
declare module 'express' {
  interface Request {
    auth?: () => { // Change to a function that returns the AuthObject
      userId: string | null;
      sessionId: string | null;
      orgId: string | null;
      // Add other Clerk auth properties you might use
    };
  }
}

// Define the AnalysisResponse type used in llmService
export interface AnalysisResponse {
  modificationIdeas: string;
  contentExplanation: string;
  modifiedResume: string;
}

// Export other types if any were present before (none were in the provided file content)
