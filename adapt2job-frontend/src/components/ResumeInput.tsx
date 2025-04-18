import React, { useState } from 'react';
import { FaLock, FaFileUpload, FaPaste } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ResumeInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required: boolean;
  resumeInputRef: React.Ref<HTMLTextAreaElement>;
}

const ResumeInput: React.FC<ResumeInputProps> = ({ value, onChange, resumeInputRef }) => {
  const [activeMethod, setActiveMethod] = useState<'upload' | 'paste'>('paste');
  const { t } = useTranslation();

  const handleMethodChange = (method: 'upload' | 'paste') => {
    setActiveMethod(method);
  };

  return (
    <div>
      <div className="mb-2">
        <p className="text-sm text-slate-600 flex items-center">
          <FaLock className="mr-1 text-xs" /> {t('您的简历将不会被网站保存，绝不会与第三方共享')}
        </p>
      </div>

      <div className="flex gap-2 mb-4 bg-gray-100 p-1 rounded-md">
      <button
          onClick={() => handleMethodChange('paste')}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors ${
            activeMethod === 'paste' 
              ? 'bg-gray-700 text-white' // Active state: dark gray background, white text
              : 'tab-button bg-gray-200 text-gray-800 hover:bg-gray-300' // Inactive state: light gray, dark text, hover effect
          }`}
        >
          <FaPaste />
          <span>{t('粘贴简历')}</span>
        </button>
        <button
          onClick={() => handleMethodChange('upload')}
          className={`flex items-center justify-center gap-2 px-4 py-2 ${
            activeMethod === 'upload' 
              ? '' 
              : 'tab-button'
          }`}
        >
          <FaFileUpload />
          <span>{t('上传文件')}</span>
        </button>
        
      </div>

      {activeMethod === 'paste' && (
        <div className="relative">
          <textarea
            placeholder="Paste your CV content here..."
            value={value}
            onChange={onChange}
            required={true}
            className="w-full h-[250px] border border-gray-300 rounded-md p-3 resize-none"
            ref={resumeInputRef}
          />
        </div>
      )}
      
      {activeMethod === 'upload' && (
        <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center text-gray-500">
          <FaFileUpload className="mx-auto text-2xl mb-2" />
          <p>{t('文件上传功能即将推出')}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeInput;
