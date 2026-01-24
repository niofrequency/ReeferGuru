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
    // OUTER CONTAINER: Gradient Mask (Matches MainChatArea example)
    // 1. Fixed/Sticky positioning logic handled by parent flex layout
    // 2. Gradient: Solid Gray-950 at bottom -> Transparent at top
    <div className="w-full flex-shrink-0 z-20 px-2 pb-4 pt-4 md:pb-6 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent dark:from-gray-950 dark:via-gray-950 dark:to-transparent transition-colors duration-300">
      
      {/* INNER CAPSULE: Floating Glass Look */}
      <div className="max-w-3xl mx-auto w-full relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-[26px] shadow-2xl transition-all focus-within:border-reefer-blue/50">
        
        <div className="px-2">
            <AIInputWithFile 
              onSubmit={handleAIInputSubmit}
              placeholder="Ask Reefer Guru..."
              loading={isSending}
              // Remove default styles from the component so our Capsule Wrapper controls the look
              className="border-none shadow-none bg-transparent focus:ring-0 [&_textarea]:min-h-[24px] [&_textarea::-webkit-scrollbar]:hidden [&_textarea]:[scrollbar-width:none]"
            />
        </div>

        {/* Disclaimer Text - Positioned outside or subtly inside */}
        <div className="absolute -bottom-6 left-0 right-0 text-center">
             <p className="text-[9px] uppercase tracking-widest text-gray-400 dark:text-gray-600 font-bold">
               Carrier Transicold AI • Check Manuals
             </p>
        </div>
      </div>
    </div>
  );
};
