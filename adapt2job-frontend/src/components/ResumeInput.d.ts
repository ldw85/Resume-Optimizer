import React from 'react';

interface ResumeInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onContentChange: (content: string) => void;
    onLoadingChange: (isLoading: boolean) => void;
    onFileParsedChange: (isParsed: boolean) => void;
    onActiveMethodChange: (method: 'upload' | 'paste') => void;
    onResumeContentAvailableChange: (isAvailable: boolean) => void;
}

declare const ResumeInput: React.ForwardRefExoticComponent<ResumeInputProps & React.RefAttributes<any>>;
export default ResumeInput;
