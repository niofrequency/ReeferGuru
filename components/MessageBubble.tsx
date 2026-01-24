import React, { useState } from 'react';
import { Message } from '../types';
import { Bot, User, AlertTriangle, Copy, Check, Cpu } from 'lucide-react';
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
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-8 animate-in fade-in slide-in-from-bottom-2 duration-300`}>
      <div className={`flex flex-col max-w-[85%] md:max-w-[75%] ${isUser ? 'items-end' : 'items-start'}`}>
        
        {/* HEADER: Identity Designation (Like your example) */}
        <div className={`flex items-center gap-2 mb-1.5 px-1`}>
            {!isUser && <Cpu className="w-3 h-3 text-reefer-blue" />}
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isUser ? 'text-gray-500' : 'text-reefer-blue'}`}>
                {isUser ? 'User Protocol' : 'Guru Interface'}
            </span>
            {isUser && <User className="w-3 h-3 text-gray-500" />}
        </div>

        {/* TEXT CONTENT: Neural Chat Bubble Style */}
        <div className={`
          relative px-5 py-4 text-sm md:text-[15px] leading-relaxed backdrop-blur-md transition-all shadow-lg
          ${isUser 
            // USER: Ultra-transparent glass
            ? 'bg-white/[0.03] text-gray-200 rounded-2xl rounded-tr-none border border-white/10' 
            : isError
              // ERROR: Red tint
              ? 'bg-red-900/10 text-red-200 rounded-2xl rounded-tl-none border border-red-500/30'
              // BOT: Reefer Blue tint (subtle)
              : 'bg-reefer-blue/10 text-gray-100 rounded-2xl rounded-tl-none border border-reefer-blue/30 shadow-[0_0_20px_rgba(0,85,164,0.1)]'
          }
        `}>
          
          {/* Background Glow for Bot */}
          {!isUser && !isError && (
             <div className="absolute -inset-0.5 bg-reefer-blue/10 rounded-2xl blur-md -z-10"></div>
          )}

          {/* Attached Image Preview */}
          {message.imageUrl && (
            <div className="mb-4 mt-1 rounded-xl overflow-hidden border border-white/10 bg-black/20 max-w-[280px]">
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
          
          {/* Footer: Copy Button & Timestamp */}
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
            {!isUser && !isError ? (
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gray-500 hover:text-white transition-colors"
                    title="Copy"
                >
                    {isCopied ? <Check size={12} className="text-reefer-green" /> : <Copy size={12} />}
                    <span className="font-bold">{isCopied ? 'Copied' : 'Copy'}</span>
                </button>
            ) : <div />}
            
            <div className="text-[9px] text-gray-600 font-mono tracking-tighter uppercase">
              [{new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
