import React, { useState, useRef, useEffect } from 'react'; // Import useEffect
import axios from 'axios';
import { FaFileUpload, FaPaste, FaSpinner } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast'; // Import toast
import { getSavedResumes, saveResume } from '../services/resumeService'; // Import resume service
import { SavedResume } from '../types'; // Import SavedResume type
import { checkAndProcessPDF } from '../services/pdfService';
interface ResumeInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onContentChange: (content: string) => void;
  onLoadingChange: (isLoading: boolean) => void; // New prop to communicate loading state
  onFileParsedChange: (isParsed: boolean) => void; // New prop to communicate file parsing status
  onActiveMethodChange: (method: 'upload' | 'paste') => void; // New prop to communicate active method
  onResumeContentAvailableChange: (isAvailable: boolean) => void; // New prop to communicate resume content availability
  // onSaveResume: () => void; // New prop to trigger saving from parent - Removed as using ref
  // required: boolean; // Removed as unused
  // resumeInputRef: React.Ref<any>; // Removed as using forwardRef
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ResumeInput = React.forwardRef<any, ResumeInputProps>(({ value, onChange, onContentChange, onLoadingChange, onFileParsedChange, onActiveMethodChange, onResumeContentAvailableChange }, ref) => {
  const [activeMethod, setActiveMethod] = useState<'upload' | 'paste'>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  const [isSaveResumeEnabled, setIsSaveResumeEnabled] = useState(false);
  // const [savedResumes, setSavedResumes] = useState<SavedResume[]>([]); // Use imported type - Removed as unused
  const [selectedSavedResume, setSelectedSavedResume] = useState<SavedResume | null>(null); // Store the selected resume object
  const [showUploadArea, setShowUploadArea] = useState(true); // Initially show upload area
  // const [isLoadingSavedResumes, setIsLoadingSavedResumes] = useState(false); // New state for loading - Removed as unused
  const [hasAttemptedSavedResumesFetch, setHasAttemptedSavedResumesFetch] = useState(false); // New state to prevent re-fetching on error

  // New state to track if resume content is available and valid
  const [isResumeContentAvailable, setIsResumeContentAvailable] = useState(false);

  const handleSaveResumeToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    if (isChecked && !window.Clerk?.session) {
      // If checking the box and user is not logged in, prompt for login
      toast.error(t('resumeInput.saveResumeError'), { duration: 5000 }); // Show error message
      // Do not set isSaveResumeEnabled to true yet
      // Assuming Clerk provides a method to open the sign-in dialog
      window.Clerk?.openSignIn(); // Trigger Clerk login dialog
    } else {
      // If unchecking the box or user is logged in, update the state
      setIsSaveResumeEnabled(isChecked);
    }
    // Toggle only affects saving behavior, not display area
    // Display area is controlled by whether a saved resume was loaded on mount
  };

  // Function to trigger saving the current resume
  const triggerSaveResume = async () => {
    // Check if user is logged in
    if (isSaveResumeEnabled && !window.Clerk?.session) {
      toast.error(t('resumeInput.saveResumeError'), { duration: 5000 }); // Show toast error
      return; // Stop execution if not logged in
    }

    // Only save if content is available, not loading, no error, and save is enabled
    if (value && !isLoading && !error && isSaveResumeEnabled) {
      try {
        // Generate a title based on the active method
        const title = activeMethod === 'upload'
          ? `Resume - ${selectedFile?.name || new Date().toLocaleString()}`
          : `Pasted Resume - ${new Date().toLocaleString()}`;

        const saved = await saveResume(value, title);
        console.log('Resume saved:', saved);
        // After saving, update the selectedSavedResume
        // setSavedResumes([saved]); // Assuming only one resume is saved - Removed as unused
        setSelectedSavedResume(saved);
        // Do NOT reset hasAttemptedSavedResumesFetch here, as saving should not trigger re-fetch
      } catch (error) {
        console.error('Failed to save resume:', error);
        toast.error(t('resumeInput.saveResumeError'), { duration: 5000 }); // Show toast error
      }
    }
  };

  // Fetch saved resumes when component mounts
  useEffect(() => {
    const fetchResumes = async () => {
      // This function should only run if the user is logged in and we haven't tried yet.
      if (window.Clerk?.session && !hasAttemptedSavedResumesFetch) {
        setHasAttemptedSavedResumesFetch(true);

        try {
          const resumes = await getSavedResumes();
          if (resumes.length > 0) {
            const latestResume = resumes[0];
            setSelectedSavedResume(latestResume);
            onContentChange(latestResume.content);
            setShowUploadArea(false);
          }
        } catch (err) {
          // If fetching fails, log the error but do not block the user.
          // The UI will default to the upload area, which is the desired behavior.
          console.error("Failed to fetch saved resumes, continuing without them.", err);
        }
      }
    };

    fetchResumes();
    // This effect should run only once when the component mounts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleMethodChange = (method: 'upload' | 'paste') => {
    setActiveMethod(method);
    onActiveMethodChange(method); // Notify parent of method change
    setSelectedFile(null);
    setError(null);
    setIsLoading(false);
    onLoadingChange(false); // Reset loading state when method changes
    onFileParsedChange(false); // Reset file parsed status when method changes
    if (method === 'paste') { // Only clear content when switching to paste method
      onContentChange('');
    }
  };

  // 处理扫描版PDF
  const handleScannedPDF = async (images: string[]): Promise<any> => {
    const imagesFormData = new FormData();
    images.forEach((image, index) => {
      const imageFile = dataURLtoFile(image, `page-${index + 1}.png`);
      imagesFormData.append('files', imageFile);
    });

    return await axios.post(`${BACKEND_URL}/api/resume/parse-resume-images`, imagesFormData);
  };

  // 处理普通文件（包括普通PDF）
  const handleRegularFile = async (file: File): Promise<any> => {
    const formData = new FormData();
    formData.append('resume', file);
    return await axios.post(`${BACKEND_URL}/api/resume/parse`, formData);
  };

  // Data URL转File对象
  const dataURLtoFile = (dataurl: string, filename: string): File => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleUploadAreaClick = () => {
    // Programmatically click the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setSelectedFile(null);
      setError(null);
      onContentChange('');
      onFileParsedChange(false);
      return;
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
    ];
    if (!allowedTypes.includes(file.type)) {
      setError(t('不支持的文件格式。请上传 PDF、Word 或图片文件（JPG, PNG）。'));
      setSelectedFile(null);
      onContentChange('');
      onFileParsedChange(false);
      return;
    }

    setSelectedFile(file);
    setError(null);
    setIsLoading(true);
    onLoadingChange(true);
    onFileParsedChange(false);

    try {
      let response;

      let parsedText = '';

      if (file.type === 'application/pdf') {
        // 检查是否为扫描版PDF
        const pdfResult = await checkAndProcessPDF(file);

        if (pdfResult.isScanned) {
          // 处理扫描版PDF
          if (pdfResult.images) {
            response = await handleScannedPDF(pdfResult.images);
            parsedText = response.data.text;
          } else {
            throw new Error('Scanned PDF processing failed: no images returned.');
          }
        } else {
          // 处理普通PDF
          if (pdfResult.text) {
            parsedText = pdfResult.text; // 直接使用提取的文本
          } else {
             // 如果没有提取到文本，但isScanned为false，仍然尝试后端解析
             response = await handleRegularFile(file);
             parsedText = response.data.text;
          }
        }
      } else {
        // 处理其他文件类型
        response = await handleRegularFile(file);
        parsedText = response.data.text;
      }

      onContentChange(parsedText);
      setError(null);
      onFileParsedChange(true);

    } catch (err: unknown) {
      console.error('File parsing error:', err);
      if (err instanceof Error) {
        setError(err.message || t('文件解析过程中发生错误。'));
      } else {
        setError(t('文件解析过程中发生未知错误。'));
      }
      onContentChange('');
      onFileParsedChange(false);
    } finally {
      setIsLoading(false);
      onLoadingChange(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };


  // Effect to update isResumeContentAvailable and notify parent
  useEffect(() => {
    const currentIsResumeContentAvailable =
      value.trim().length > 0 && !isLoading && !error; // Removed isLoadingSavedResumes
    //console.log('ResumeInput: isResumeContentAvailable Effect - value length:', value.trim().length, 'isLoading:', isLoading, 'isLoadingSavedResumes:', isLoadingSavedResumes, 'error:', error, 'currentIsResumeContentAvailable:', currentIsResumeContentAvailable);
    if (currentIsResumeContentAvailable !== isResumeContentAvailable) {
      setIsResumeContentAvailable(currentIsResumeContentAvailable);
      onResumeContentAvailableChange(currentIsResumeContentAvailable);
    }
  }, [value, isLoading, error, isResumeContentAvailable, onResumeContentAvailableChange]); // Removed isLoadingSavedResumes


  // Expose triggerSaveResume to parent via ref
  React.useImperativeHandle(ref, () => ({
    triggerSaveResume,
  }));


  return (
    <div>
      {/* Save Resume Toggle */}
      {showUploadArea && ( // Conditionally render toggle
        <div className="mb-4 flex items-center gap-4"> {/* Adjusted margin-bottom and added gap */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="saveResumeToggle"
              checked={isSaveResumeEnabled}
              onChange={handleSaveResumeToggleChange}
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" // Added some basic styling
            />
            <label htmlFor="saveResumeToggle" className="text-sm text-slate-700 cursor-pointer">
              {t('resumeInput.saveResumeToggle')}
            </label>
          </div>
          <p className="text-xs text-slate-500">
            {t('resumeInput.saveResumeDescription')}
          </p>
        </div>
      )}

      {/* Removed isLoadingSavedResumes check */}
      <>
        {/* Display saved resume or upload area */}
        {selectedSavedResume && !showUploadArea ? (
          <div className="flex items-center justify-between mb-4 p-4 border border-gray-300 rounded-md bg-gray-50">
            <p className="text-sm text-slate-700">
              {t('resumeInput.yourSavedResume')}
              <span className="font-semibold text-gray-800 ml-1">{selectedSavedResume?.title}</span>
            </p>
            <button
              onClick={() => {
                setShowUploadArea(true);
                handleMethodChange('upload');
              }}
              className="text-sm text-blue-600 hover:underline px-3 py-1 rounded-md border border-blue-600 hover:bg-blue-50"
            >
              {t('resumeInput.uploadNewResume')}
            </button>
          </div>
        ) : (
          <>
            {/* Method selection buttons */}
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

            {/* Resume Input Area (Textarea or Upload Area) */}
            {activeMethod === 'paste' && (
              <div className="relative">
                <textarea
                  placeholder={t('在此粘贴您的简历内容...')}
                  value={value}
                  onChange={onChange} // Keep original onChange for immediate UI update
                  className="w-full h-[250px] border border-gray-300 rounded-md p-3 resize-none"
                  ref={ref}
                  aria-label={t('简历内容输入框')}
                />
              </div>
            )}

            {activeMethod === 'upload' && (
              <div
                onClick={handleUploadAreaClick}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleUploadAreaClick(); }}
                role="button"
                tabIndex={0}
                className={`border-2 border-dashed rounded-md p-8 text-center cursor-pointer transition-colors relative ${
                  error ? 'border-red-500 text-red-600' : 'border-gray-300 text-gray-500 hover:border-gray-400'
                }`}
                aria-label={t('点击或拖拽文件上传')}
              >
                {isLoading ? (
                  <div className="flex flex-col items-center">
                    <FaSpinner className="mx-auto text-2xl mb-2 animate-spin" />
                    <p>{t('正在解析文件...')}</p>
                  </div>
                ) : selectedFile ? (
                  <div className="flex flex-col items-center">
                    <FaFileUpload className="mx-auto text-2xl mb-2" />
                    <p className="text-gray-800 font-semibold">{selectedFile?.name}</p>
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
                    <p className="text-sm text-gray-500">{t('支持 PDF, Word (.docx), 图片 (.jpg, .png)')}</p>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  accept=".pdf,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
});

export default ResumeInput;
