// src/components/SettingsModal.tsx
import React, { useState, useEffect } from 'react';
import useApiKeyStorage from '../hooks/useApiKeyStorage';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { apiKeys, updateApiKey } = useApiKeyStorage();
  const [localGeminiApiKey, setLocalGeminiApiKey] = useState(apiKeys.gemini || '');
  const [localTavilyApiKey, setLocalTavilyApiKey] = useState(apiKeys.tavily || '');


  useEffect(() => {
    setLocalGeminiApiKey(apiKeys.gemini || '');
    setLocalTavilyApiKey(apiKeys.tavily || '');
  }, [apiKeys]);


  const handleSave = () => {
    updateApiKey('gemini', localGeminiApiKey);
    updateApiKey('tavily', localTavilyApiKey);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen px-4 text-center md:items-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  设置
                </h3>
                <div className="mt-2">
                  <div className="mb-4">
                    <label htmlFor="gemini-api-key" className="block text-gray-700 text-sm font-bold mb-2">
                      Gemini API 密钥
                    </label>
                    <input
                      type="password"
                      id="gemini-api-key"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="请输入 Gemini API 密钥"
                      value={localGeminiApiKey}
                      onChange={(e) => setLocalGeminiApiKey(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tavily-api-key" className="block text-gray-700 text-sm font-bold mb-2">
                      Tavily API 密钥
                    </label>
                    <input
                      type="password"
                      id="tavily-api-key"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="请输入 Tavily API 密钥"
                      value={localTavilyApiKey}
                      onChange={(e) => setLocalTavilyApiKey(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleSave}
            >
              保存
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleCancel}
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
