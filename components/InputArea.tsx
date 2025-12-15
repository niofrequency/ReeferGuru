import React from 'react';
import { Attachment, SendingStatus } from '../types';
import { AIInputWithFile } from './ui/ai-input-with-file';

interface InputAreaProps {
  onSendMessage: (text: string, attachment?: Attachment) => void;
  status: SendingStatus;
}

export const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, status }) => {
  const isSending = status === SendingStatus.SENDING || status === SendingStatus.THINKING;

  const handleAIInputSubmit = async (text: string, file?: File) => {
    // If there is a file, convert it to the app's Attachment format
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file (JPEG, PNG).');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const base64Data = base64String.split(',')[1];
        
        const attachment: Attachment = {
          file,
          previewUrl: URL.createObjectURL(file),
          base64: base64Data,
          mimeType: file.type
        };
        
        onSendMessage(text, attachment);
      };
      reader.readAsDataURL(file);
    } else {
      // Text only
      onSendMessage(text);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 p-2 w-full z-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto w-full">
        <AIInputWithFile 
          onSubmit={handleAIInputSubmit}
          placeholder="Ask Reefer Guru or upload a photo..."
          loading={isSending}
        />
        
        <div className="text-center mt-1">
             <p className="text-[10px] text-gray-400 dark:text-gray-600">
               Carrier Transicold Assistant. Always check official manuals.
             </p>
        </div>
      </div>
    </div>
  );
};