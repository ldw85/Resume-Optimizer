import React from 'react';
import { FaBriefcase, FaPaste, FaLink } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface JobInputProps {
  value: string; // For paste method
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // For paste method
  activeMethod: 'paste' | 'link';
  onMethodChange: (method: 'paste' | 'link') => void;
  jobLink: string; // For link method
  onLinkChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // For link method
  required: boolean;
  //isLoading?: boolean; // Optional: to show loading state from parent
  error?: string | null; // Optional: to show error message from parent
}

const JobInput: React.FC<JobInputProps> = ({
  value,
  onChange,
  activeMethod,
  onMethodChange,
  jobLink,
  onLinkChange,
  //isLoading,
  error,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <FaBriefcase className="text-slate-800" />
          <h2 className="text-xl font-semibold text-slate-800">{t('jobInput.title')}</h2>
        </div>
      </div>

      <div className="flex gap-2 mb-4 p-1 rounded-md">
        <button
          onClick={() => onMethodChange('paste')}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors ${
            activeMethod === 'paste'
              ? 'bg-gray-700 text-white'
              : 'tab-button bg-gray-400 text-gray-800 hover:bg-gray-500'
          }`}
          tabIndex={0}
          aria-label={t('jobInput.pasteAriaLabel')}
        >
          <FaPaste />
          <span>{t('jobInput.pasteTab')}</span>
        </button>
        <button
          onClick={() => onMethodChange('link')}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors ${
            activeMethod === 'link'
              ? 'bg-gray-700 text-white'
              : 'tab-button bg-gray-400 text-gray-800 hover:bg-gray-500'
          }`}
          tabIndex={0}
          aria-label={t('jobInput.linkAriaLabel')}
        >
          <FaLink />
          <span>{t('jobInput.linkTab')}</span>
        </button>
      </div>

      {activeMethod === 'paste' && (
        <div>
          <p className="text-sm text-slate-600 flex items-center mb-1">
            <FaPaste className="mr-1" />
            {t('jobInput.pasteDescription')}
          </p>
          <textarea
            placeholder={t('jobInput.pastePlaceholder')}
            value={value}
            onChange={onChange}
            required={true}
            className="w-full h-[250px] border border-gray-300 rounded-md p-3 resize-none"
            aria-label={t('jobInput.pasteAriaLabel')}
          />
        </div>
      )}

      {activeMethod === 'link' && (
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-600 flex items-center">
            <FaLink className="mr-1" />
            {t('jobInput.linkDescription')}
          </p>
          <input
            type="url"
            placeholder={t('jobInput.linkPlaceholder')}
            value={jobLink}
            onChange={onLinkChange}
            required={true}
            className="w-full border border-gray-300 rounded-md p-3"
            aria-label={t('jobInput.linkAriaLabel')}
          />
           {/* Loading and error states are now handled by the parent (OptimizerPage) */}
           {/* {isLoading && <p className="text-blue-500 text-sm mt-2">{t('jobInput.fetchingButton')}</p>} */}
           {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default JobInput;
