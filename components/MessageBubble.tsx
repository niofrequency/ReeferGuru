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
        
        {/* Avatar - High Transparency */}
        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center shadow-sm mx-2 mb-1 backdrop-blur-md border
          ${isUser 
            ? 'bg-white/10 border-white/10 text-gray-300' 
            : isError 
              ? 'bg-red-500/10 border-red-500/20 text-red-400' 
              : 'bg-reefer-blue/10 border-reefer-blue/20 text-reefer-blue dark:text-blue-400'
          }
        `}>
          {isUser ? <User size={16} /> : isError ? <AlertTriangle size={16} /> : <Bot size={18} />}
        </div>

        {/* Bubble Content - TRUE TRANSPARENT GLASS STYLE */}
        <div className={`
          relative px-5 py-3.5 text-sm md:text-base shadow-sm backdrop-blur-md transition-all
          ${isUser 
            // USER: Subtle white glass (matches your example)
            ? 'bg-white/[0.05] border border-white/10 text-gray-100 rounded-2xl rounded-br-none' 
            : isError
              // ERROR: Subtle red glass
              ? 'bg-red-900/20 border border-red-500/20 text-red-200 rounded-2xl rounded-bl-none'
              // BOT: Very subtle dark glass (matches your example)
              : 'bg-black/20 dark:bg-white/[0.02] border border-white/5 text-gray-800 dark:text-gray-200 rounded-2xl rounded-bl-none'
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

          {/* Text Content */}
          <div className={`markdown prose prose-sm max-w-none 
            ${isUser ? 'prose-invert' : 'prose-slate dark:prose-invert'} 
            prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-li:my-0
            prose-strong:font-bold prose-strong:text-current
            prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          `}>
             <ReactMarkdown 
               components={{
                 code({node, className, children, ...props}) {
                   const match = /language-(\w+)/.exec(className || '')
                   return !match ? (
                     <code className="bg-white/10 rounded px-1 text-xs border border-white/5" {...props}>
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
                        <blockquote className="not-italic border-l-4 border-reefer-green bg-green-900/10 text-green-100 p-2 my-2 rounded-r text-xs md:text-sm font-medium">
                            {children}
                        </blockquote>
                    )
                 },
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
          
          {/* Footer */}
          <div className="flex items-center justify-between mt-2 min-h-[20px]">
            {!isUser && !isError ? (
                <button
                    onClick={handleCopy}
                    className="p-1 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                    title="Copy"
                >
                    {isCopied ? <Check size={14} className="text-reefer-green" /> : <Copy size={14} />}
                </button>
            ) : <div />}
            
            <div className="text-[10px] font-medium opacity-50">
              {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
