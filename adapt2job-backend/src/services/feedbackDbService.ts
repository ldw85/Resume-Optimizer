import { supabase } from './supabaseClient';

export const insertFeedback = async (comment: string, userId: string) => {
  const { data, error } = await supabase
    .from('feedback')
    .insert([
      { comment, user_id: userId }
    ]);

  if (error) {
    console.error('Error inserting feedback:', error);
    throw new Error(`Failed to insert feedback: ${error.message}`);
  }
  return data;
};
