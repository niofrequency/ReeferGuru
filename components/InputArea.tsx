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
      onSendMessage(text);
    }
  };

  return (
    // PURE GRADIENT MASK (Aria Style)
    // 1. from-gray-50/dark:from-gray-950 -> Matches your page background EXACTLY.
    // 2. via-gray-50/dark:via-gray-950 -> Keeps the bottom area solid so text doesn't overlap.
    // 3. to-transparent -> Fades the top edge so there is NO border line.
    <div className="w-full flex-shrink-0 z-20 p-2 md:pb-6 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto w-full">
        <AIInputWithFile 
          onSubmit={handleAIInputSubmit}
          placeholder="Ask Reefer Guru..."
          loading={isSending}
          // Remove scrollbar from textarea for cleaner look
          className="[&_textarea::-webkit-scrollbar]:hidden [&_textarea]:[scrollbar-width:none] [&_textarea]:[-ms-overflow-style:none]"
        />
      </div>
    </div>
  );
};
