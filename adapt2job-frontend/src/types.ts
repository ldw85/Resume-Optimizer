interface AnalysisResponse {
  modificationIdeas: string;
  contentExplanation: string;
  modifiedResume: string;
}

interface SavedResume {
  id: string;
  title: string;
  content: string;
  created_at: string; // Or Date if you parse it
}

export type { AnalysisResponse, SavedResume };
