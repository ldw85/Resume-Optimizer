import React, { useState } from 'react';
import { FaBriefcase, FaLink, FaPaste } from 'react-icons/fa';

interface JobInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required: boolean;
}

const JobInput: React.FC<JobInputProps> = ({ value, onChange }) => {
  const [activeMethod, setActiveMethod] = useState<'url' | 'paste'>('paste');

  const handleMethodChange = (method: 'url' | 'paste') => {
    setActiveMethod(method);
  };

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <FaBriefcase className="text-slate-800" />
          <h2 className="text-xl font-semibold text-slate-800">职位描述</h2>
        </div>
        <p className="text-sm text-slate-600">
          输入职位发布网址或粘贴完整描述
        </p>
      </div>

      <div className="flex gap-2 mb-4 bg-gray-100 p-1 rounded-md">
        <button
          onClick={() => handleMethodChange('paste')}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-colors ${
            activeMethod === 'paste'
              ? 'active bg-gray-300 text-white' // Active state: dark gray background, white text
              : 'tab-button bg-gray-200 text-gray-800 hover:bg-gray-300' // Inactive state: light gray, dark text, hover effect
          }`}
        >
          <FaPaste />
          <span>粘贴文本</span>
        </button>
        <button
          onClick={() => handleMethodChange('url')}
          className={`flex items-center justify-center gap-2 px-4 py-2  rounded-md transition-colors ${
            activeMethod === 'url'
              ? 'active bg-gray-300 text-white' // Active state: dark gray background, white text
              : 'tab-button bg-gray-200 text-gray-800 hover:bg-gray-300' // Inactive state: light gray, dark text, hover effect
          }`}
        >
          <FaLink />
          <span>输入网址</span>
        </button>
      </div>

      {activeMethod === 'paste' && (
        <div>
          <textarea
            placeholder="Paste the full job description here..."
            value={value}
            onChange={onChange}
            required={true}
            className="w-full h-[250px] border border-gray-300 rounded-md p-3 resize-none"
          />
        </div>
      )}
      
      {activeMethod === 'url' && (
        <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center text-gray-500">
          <FaLink className="mx-auto text-2xl mb-2" />
          <p>通过 URL 输入职位描述的功能即将推出</p>
        </div>
      )}
    </div>
  );
};

export default JobInput;
