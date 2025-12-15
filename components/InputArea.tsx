import React, { useState, useRef, useCallback } from 'react';
import { ArrowUp, Paperclip, X, Loader2 } from 'lucide-react';
import { Attachment, SendingStatus } from '../types';

interface InputAreaProps {
  onSendMessage: (text: string, attachment?: Attachment) => void;
  status: SendingStatus;
}

export const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, status }) => {
  const [text, setText] = useState('');
  const [attachment, setAttachment] = useState<Attachment | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isSending = status === SendingStatus.SENDING || status === SendingStatus.THINKING;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Simple validation
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file (JPEG, PNG).');
        return;
      }

      // Convert to Base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Extract pure base64 part (remove "data:image/jpeg;base64,")
        const base64Data = base64String.split(',')[1];
        
        setAttachment({
          file,
          previewUrl: URL.createObjectURL(file),
          base64: base64Data,
          mimeType: file.type
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const clearAttachment = () => {
    if (attachment) {
      URL.revokeObjectURL(attachment.previewUrl);
      setAttachment(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleSend = () => {
    if ((!text.trim() && !attachment) || isSending) return;
    onSendMessage(text, attachment || undefined);
    setText('');
    clearAttachment();
    
    // Reset textarea height
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-resize textarea
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 p-4 pb-6 w-full z-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Attachment Preview */}
        {attachment && (
          <div className="mb-2 ml-4 inline-flex items-center gap-2 bg-white dark:bg-gray-800 p-1.5 pr-3 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm animate-in fade-in slide-in-from-bottom-2">
            <div className="relative group">
              <img 
                src={attachment.previewUrl} 
                alt="Preview" 
                className="h-12 w-12 object-cover rounded-lg" 
              />
              <button
                onClick={clearAttachment}
                className="absolute -top-1.5 -right-1.5 bg-gray-500 hover:bg-red-500 text-white rounded-full p-0.5 shadow-sm transition-colors"
              >
                <X size={10} />
              </button>
            </div>
            <div className="flex flex-col">
                 <span className="text-xs font-medium text-gray-700 dark:text-gray-200 truncate max-w-[120px]">{attachment.file.name}</span>
            </div>
          </div>
        )}

        {/* Input Pill */}
        <div className={`
            relative flex items-end gap-2 p-2 rounded-[26px] shadow-sm border transition-all duration-200
            ${isSending ? 'opacity-80' : 'opacity-100'}
            bg-white dark:bg-gray-900 
            border-gray-200 dark:border-gray-800
            focus-within:border-reefer-blue/50 dark:focus-within:border-reefer-blue/50
            focus-within:ring-2 focus-within:ring-reefer-blue/10
            focus-within:shadow-md
        `}>
          {/* File Upload Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isSending}
            className="flex-shrink-0 p-2.5 ml-1 mb-0.5 text-gray-400 hover:text-reefer-blue dark:text-gray-500 dark:hover:text-reefer-blue bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            title="Upload image"
          >
            <Paperclip size={20} />
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />
          </button>

          {/* Text Input */}
          <div className="flex-1 py-3">
              <textarea
                  ref={textareaRef}
                  value={text}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  placeholder="File Upload and Chat!"
                  disabled={isSending}
                  rows={1}
                  className="w-full bg-transparent border-0 focus:ring-0 p-0 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-base resize-none max-h-32 min-h-[24px]"
                  style={{ lineHeight: '1.5' }}
              />
          </div>

          {/* Send Button */}
          <button
            onClick={handleSend}
            disabled={(!text.trim() && !attachment) || isSending}
            className={`flex-shrink-0 p-2.5 mr-1 mb-0.5 rounded-full transition-all duration-200 flex items-center justify-center
              ${(!text.trim() && !attachment) || isSending
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                : 'bg-reefer-blue text-white shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-95'
              }
            `}
          >
            {isSending ? <Loader2 size={20} className="animate-spin" /> : <ArrowUp size={20} strokeWidth={2.5} />}
          </button>
        </div>
        
        <div className="text-center mt-3">
             <p className="text-[10px] text-gray-400 dark:text-gray-600">
               Carrier Transicold Assistant. Always check official manuals.
             </p>
        </div>

      </div>
    </div>
  );
};
