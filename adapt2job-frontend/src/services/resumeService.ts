import { SavedResume } from '../types'; // Assuming you have a types file for SavedResume

const API_URL = import.meta.env.VITE_BACKEND_URL; // Use the backend URL environment variable

// Function to get user's saved resumes
export const getSavedResumes = async (): Promise<SavedResume[]> => {
  try {
    const response = await fetch(`${API_URL}/api/resumes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await window.Clerk.session.getToken()}`,
      },
    });

    if (!response.ok) {
      // Handle non-2xx responses
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch saved resumes');
    }

    const data: SavedResume[] = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching saved resumes:', error);
    throw error; // Re-throw the error for the component to handle
  }
};

// Function to save a resume
export const saveResume = async (content: string, title?: string): Promise<SavedResume> => {
  try {
    const response = await fetch(`${API_URL}/api/resumes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await window.Clerk.session.getToken()}`,
      },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) {
      // Handle non-2xx responses
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to save resume');
    }

    const data: SavedResume = await response.json();
    return data;

  } catch (error) {
    console.error('Error saving resume:', error);
    throw error; // Re-throw the error for the component to handle
  }
};

// Define the SavedResume type (assuming it's not already in types.ts)
// If you have a central types file, you can remove this definition.
/*
export interface SavedResume {
  id: string;
  title: string;
  content: string;
  created_at: string; // Or Date if you parse it
}
*/
