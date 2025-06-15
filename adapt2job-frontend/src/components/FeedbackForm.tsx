import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { submitFeedback } from '../services/feedbackService';

interface FeedbackFormProps {
  userId: string;
  onFeedbackSubmitted: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ userId, onFeedbackSubmitted }) => {
  const { t } = useTranslation();
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      toast.error(t('feedback.commentRequired'));
      return;
    }

    setIsSubmitting(true);
    try {
      await submitFeedback(comment, userId);
      toast.success(t('feedback.submitSuccess'));
      setComment('');
      onFeedbackSubmitted(); // Notify parent component
    } catch (error: any) {
      console.error('Error submitting feedback:', error);
      toast.error(t('feedback.submitError', { message: error.message || 'Unknown error' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('feedback.title')}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="feedbackComment" className="block text-gray-700 text-sm font-bold mb-2">
            {t('feedback.yourComment')}
          </label>
          <textarea
            id="feedbackComment"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder={t('feedback.placeholder')}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            disabled={isSubmitting}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('feedback.submitting') : t('feedback.submitButton')}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
