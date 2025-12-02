import React, { useState, useRef, useCallback } from 'react';
import { Send, Image as ImageIcon, X, Loader2 } from 'lucide-react';
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
    <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 sticky bottom-0 w-full z-20 pb-safe transition-colors duration-300">
      {/* Attachment Preview */}
      {attachment && (
        <div className="flex items-start mb-3 bg-gray-50 dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 inline-block">
          <div className="relative group">
            <img 
              src={attachment.previewUrl} 
              alt="Preview" 
              className="h-16 w-16 object-cover rounded-md border border-gray-300 dark:border-gray-600" 
            />
            <button
              onClick={clearAttachment}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 shadow-sm hover:bg-red-600 transition-colors"
            >
              <X size={12} />
            </button>
          </div>
          <div className="ml-3 flex flex-col justify-center h-16">
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate max-w-[150px]">{attachment.file.name}</span>
            <span className="text-[10px] text-gray-500 dark:text-gray-400">{(attachment.file.size / 1024).toFixed(0)} KB</span>
          </div>
        </div>
      )}

      <div className="flex items-end gap-2 max-w-5xl mx-auto">
        {/* File Upload Button */}
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isSending}
          className="p-3 text-gray-400 hover:text-reefer-blue dark:hover:text-reefer-blue hover:bg-blue-50 dark:hover:bg-gray-800 rounded-xl transition-colors disabled:opacity-50"
          title="Upload photo of error code or diagram"
        >
          <ImageIcon size={24} />
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
          />
        </button>

        {/* Text Input */}
        <div className="flex-1 relative bg-gray-100 dark:bg-gray-800 rounded-xl focus-within:ring-2 focus-within:ring-reefer-blue focus-within:bg-white dark:focus-within:bg-gray-800 transition-all border border-transparent focus-within:border-reefer-blue/30">
            <textarea
                ref={textareaRef}
                value={text}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                placeholder="Ask Reefer Guru (e.g., 'Carrier Alarm 53')"
                disabled={isSending}
                rows={1}
                className="w-full bg-transparent px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none resize-none max-h-32 text-base"
            />
        </div>

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={(!text.trim() && !attachment) || isSending}
          className={`p-3 rounded-xl flex items-center justify-center transition-all shadow-sm
            ${(!text.trim() && !attachment) || isSending
              ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
              : 'bg-reefer-blue text-white hover:bg-blue-700 active:scale-95'
            }
          `}
        >
          {isSending ? <Loader2 size={24} className="animate-spin" /> : <Send size={24} className={text.trim() || attachment ? "ml-1" : ""} />}
        </button>
      </div>
      
      <div className="text-center mt-2">
         <p className="text-[10px] text-gray-400 dark:text-gray-600">
           Always verify with the official manual before servicing.
         </p>
      </div>
    </div>
  );
};