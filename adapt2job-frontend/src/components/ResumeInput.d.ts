import React from 'react';
interface ResumeInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onContentChange: (content: string) => void;
    required: boolean;
    resumeInputRef: React.Ref<HTMLTextAreaElement>;
}
declare const ResumeInput: React.FC<ResumeInputProps>;
export default ResumeInput;
