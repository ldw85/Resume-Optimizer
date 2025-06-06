import React, { useState, useRef } from 'react';
import { FaLock, FaFileUpload, FaPaste, FaSpinner } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ResumeInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onContentChange: (content: string) => void;
  required: boolean;
  resumeInputRef: React.Ref<HTMLTextAreaElement>;
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ResumeInput: React.FC<ResumeInputProps> = ({ value, onChange, onContentChange, resumeInputRef }) => {
  const [activeMethod, setActiveMethod] = useState<'upload' | 'paste'>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  const handleMethodChange = (method: 'upload' | 'paste') => {
    setActiveMethod(method);
    setSelectedFile(null);
    setError(null);
    setIsLoading(false);
    if (method === 'upload') {
      onContentChange('');
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setSelectedFile(null);
      setError(null);
      return;
    }

    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      setError(t('不支持的文件格式。请上传 PDF 或 Word 文件。'));
      setSelectedFile(null);
      onContentChange('');
      return;
    }

    setSelectedFile(file);
    setError(null);
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('resume', file);

      const response = await fetch(`${BACKEND_URL}/api/parse-resume`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || t('文件解析失败。'));
      }

      const data = await response.json();
      onContentChange(data.text);
      setError(null);

    } catch (err: unknown) {
      console.error('File parsing error:', err);
      if (err instanceof Error) {
        setError(err.message || t('文件解析过程中发生错误。'));
      } else {
        setError(t('文件解析过程中发生未知错误。'));
      }
      onContentChange('');
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <div className="mb-2">
        <p className="text-sm text-slate-600 flex items-center">
          <FaLock className="mr-1 text-xs" /> {t('您的简历将不会被网站保存，绝不会与第三方共享')}
        </p>
      </div>

      <div className="flex gap-2 mb-4 p-1 rounded-md">
        <button
          onClick={() => handleMethodChange('upload')}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors ${
            activeMethod === 'upload'
              ? 'bg-gray-700 text-white'
              : 'tab-button bg-gray-400 text-gray-800 hover:bg-gray-500'
          }`}
          tabIndex={0}
          aria-label={t('上传文件')}
        >
          <FaFileUpload />
          <span>{t('上传文件')}</span>
        </button>
        <button
          onClick={() => handleMethodChange('paste')}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors ${
            activeMethod === 'paste'
              ? 'bg-gray-700 text-white'
              : 'tab-button bg-gray-400 text-gray-800 hover:bg-gray-500'
          }`}
          tabIndex={0}
          aria-label={t('粘贴简历')}
        >
          <FaPaste />
          <span>{t('粘贴简历')}</span>
        </button>
        
      </div>

      {activeMethod === 'paste' && (
        <div className="relative">
          <textarea
            placeholder={t('在此粘贴您的简历内容...')}
            value={value}
            onChange={onChange}
            required={true}
            className="w-full h-[250px] border border-gray-300 rounded-md p-3 resize-none"
            ref={resumeInputRef}
            aria-label={t('简历内容输入框')}
          />
        </div>
      )}

      {activeMethod === 'upload' && (
        <div
          className={`border-2 border-dashed rounded-md p-8 text-center cursor-pointer transition-colors relative ${
            error ? 'border-red-500 text-red-600' : 'border-gray-300 text-gray-500 hover:border-gray-400'
          }`}
          onClick={handleUploadAreaClick}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleUploadAreaClick(); }}
          tabIndex={0}
          role="button"
          aria-label={t('点击或拖拽文件上传')}
        >
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }} // Hide the input visually
            accept=".pdf,.docx"
            onChange={handleFileChange}
          />
          {isLoading ? (
            <div className="flex flex-col items-center">
              <FaSpinner className="mx-auto text-2xl mb-2 animate-spin" />
              <p>{t('正在解析文件...')}</p>
            </div>
          ) : selectedFile ? (
            <div className="flex flex-col items-center">
              <FaFileUpload className="mx-auto text-2xl mb-2" />
              <p className="text-gray-800 font-semibold">{selectedFile.name}</p>
              <p className="text-sm text-gray-500">{t('文件已选择，等待解析')}</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center">
              <p className="text-red-600 font-semibold">{error}</p>
              <p className="text-sm text-gray-500">{t('请重新选择文件')}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <FaFileUpload className="mx-auto text-2xl mb-2" />
              <p>{t('点击此处或拖拽文件上传')}</p>
              <p className="text-sm text-gray-500">{t('支持 PDF, Word (.docx)')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeInput;
