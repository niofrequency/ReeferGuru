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
    // UPDATED: iOS "Frosted Glass" Style
    // 1. bg-white/70 & dark:bg-gray-950/70 -> Semi-transparent (blends with background)
    // 2. backdrop-blur-xl -> Blurs the chat behind it so you can read the input
    // 3. NO border-t -> Removes the line completely
    <div className="w-full flex-shrink-0 z-20 p-2 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-3xl mx-auto w-full">
        <AIInputWithFile 
          onSubmit={handleAIInputSubmit}
          placeholder="Ask Reefer Guru..."
          loading={isSending}
          className="[&_textarea::-webkit-scrollbar]:hidden [&_textarea]:[scrollbar-width:none] [&_textarea]:[-ms-overflow-style:none]"
        />
      </div>
    </div>
  );
};
