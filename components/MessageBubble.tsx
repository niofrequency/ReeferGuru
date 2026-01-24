import React, { useState } from 'react';
import { Message } from '../types';
import { Bot, User, AlertTriangle, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const isError = message.isError;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-6 group animate-in fade-in slide-in-from-bottom-2 duration-300`}>
      <div className={`flex max-w-[90%] md:max-w-[85%] lg:max-w-[75%] items-end ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center shadow-lg mx-2 mb-1 backdrop-blur-sm border border-white/10
          ${isUser 
            ? 'bg-white/10 text-gray-300' 
            : isError 
              ? 'bg-red-500/20 text-red-400 border-red-500/30' 
              : 'bg-reefer-blue/20 text-reefer-blue border-reefer-blue/30'
          }
        `}>
          {isUser ? <User size={16} /> : isError ? <AlertTriangle size={16} /> : <Bot size={18} />}
        </div>

        {/* Bubble Content - GLASSMORPHISM APPLIED HERE */}
        <div className={`
          relative px-5 py-3.5 text-sm md:text-base shadow-lg backdrop-blur-md transition-all
          ${isUser 
            // USER BUBBLE: Transparent Blue Glass
            ? 'bg-reefer-blue/20 text-white rounded-2xl rounded-br-none border border-reefer-blue/30' 
            : isError
              // ERROR BUBBLE: Transparent Red Glass
              ? 'bg-red-900/30 text-red-200 rounded-2xl rounded-bl-none border border-red-500/30'
              // BOT BUBBLE: Transparent Dark Glass (Neutral)
              : 'bg-gray-800/40 text-gray-100 rounded-2xl rounded-bl-none border border-white/10'
          }
        `}>
          
          {/* Attached Image Preview */}
          {message.imageUrl && (
            <div className="mb-3 rounded-lg overflow-hidden border border-white/10 bg-black/20 max-w-[280px]">
              <img 
                src={message.imageUrl} 
                alt="Uploaded context" 
                className="w-full h-auto object-cover max-h-60"
                loading="lazy"
              />
            </div>
          )}

          {/* Text Content with Markdown */}
          <div className={`markdown prose prose-sm max-w-none 
            ${isUser ? 'prose-invert' : 'prose-invert'} 
            prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-li:my-0
            prose-strong:text-white prose-strong:font-bold
            prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          `}>
             <ReactMarkdown 
               components={{
                 code({node, className, children, ...props}) {
                   const match = /language-(\w+)/.exec(className || '')
                   return !match ? (
                     <code className={`${isUser ? 'bg-white/20' : 'bg-black/30'} rounded px-1 text-xs`} {...props}>
                       {children}
                     </code>
                   ) : (
                     <pre className="bg-black/40 backdrop-blur-sm text-gray-100 p-3 rounded-lg overflow-x-auto text-xs my-2 border border-white/10">
                       <code className={className} {...props}>
                         {children}
                       </code>
                     </pre>
                   )
                 },
                 blockquote({children}) {
                    return (
                        <blockquote className="not-italic border-l-4 border-reefer-green bg-green-900/20 text-green-100 p-2 my-2 rounded-r text-xs md:text-sm font-medium">
                            {children}
                        </blockquote>
                    )
                 },
                 // Style links to stand out in the glass UI
                 a({node, children, ...props}) {
                    return (
                        <a className="text-blue-300 hover:text-blue-200 underline decoration-blue-300/50 hover:decoration-blue-200" {...props}>
                            {children}
                        </a>
                    )
                 }
               }}
             >
              {message.text}
             </ReactMarkdown>
          </div>
          
          {/* Footer: Copy Button & Timestamp */}
          <div className="flex items-center justify-between mt-2 min-h-[20px]">
            {!isUser && !isError ? (
                <button
                    onClick={handleCopy}
                    className="p-1 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                    title="Copy to clipboard"
                    aria-label="Copy to clipboard"
                >
                    {isCopied ? <Check size={14} className="text-reefer-green" /> : <Copy size={14} />}
                </button>
            ) : (
                <div /> /* Spacer */
            )}
            
            <div className={`text-[10px] font-medium opacity-60 ${isUser ? 'text-blue-100' : 'text-gray-400'}`}>
              {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
