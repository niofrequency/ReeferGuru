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
    // UPDATED LAYOUT FIX FOR iOS:
    // 1. Removed "absolute bottom-0"
    // 2. Added "flex-shrink-0" to prevent squashing
    // 3. Changed bg to solid colors with a top border
    <div className="w-full flex-shrink-0 z-20 p-2 pb-4 md:pb-6 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-3xl mx-auto w-full">
        <AIInputWithFile 
          onSubmit={handleAIInputSubmit}
          placeholder="Ask Reefer Guru..."
          loading={isSending}
          // 👇 FORCE HIDDEN SCROLLBAR (Targets the textarea inside the component)
          className="[&_textarea::-webkit-scrollbar]:hidden [&_textarea]:[scrollbar-width:none] [&_textarea]:[-ms-overflow-style:none]"
        />
        
        <div className="text-center mt-2">
             <p className="text-[10px] text-gray-400 dark:text-gray-600 font-medium">
               Carrier Transicold Assistant. Always check official manuals.
             </p>
        </div>
      </div>
    </div>
  );
};
