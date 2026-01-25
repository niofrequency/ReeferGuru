import React, { useState, useEffect } from 'react';
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

  // --- TYPEWRITER STATE ---
  // Only animate if it's a bot message AND it's new (less than 10 seconds old)
  const [shouldAnimate] = useState(() => {
    const isRecent = (Date.now() - (message.timestamp.getTime() || 0)) < 10000;
    return !isUser && !isError && isRecent;
  });

  const [displayedText, setDisplayedText] = useState(shouldAnimate ? '' : message.text);
  const [isTypingComplete, setIsTypingComplete] = useState(!shouldAnimate);

  // --- TYPING EFFECT LOGIC ---
  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayedText(message.text);
      setIsTypingComplete(true);
      return;
    }

    if (displayedText === message.text) {
      setIsTypingComplete(true);
      return;
    }

    // Typing speed (15ms)
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => {
        if (prev.length >= message.text.length) {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
          return message.text;
        }
        return message.text.slice(0, prev.length + 2); 
      });
    }, 15);

    return () => clearInterval(typingInterval);
  }, [message.text, shouldAnimate]);


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
        
        {/* HEADER: Identity Designation */}
        <div className={`flex items-center gap-2 mb-1.5 px-1 opacity-80`}>
            {!isUser && <Cpu className="w-3 h-3 text-reefer-blue dark:text-blue-400" />}
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isUser ? 'text-gray-500 dark:text-gray-400' : 'text-reefer-blue dark:text-blue-400'}`}>
                {isUser ? 'User Protocol' : 'Guru Interface'}
            </span>
            {isUser && <User className="w-3 h-3 text-gray-500 dark:text-gray-400" />}
        </div>

        {/* TEXT CONTENT - UPDATED COLORS */}
        <div className={`
          relative px-5 py-4 text-sm md:text-[15px] leading-relaxed backdrop-blur-md transition-all shadow-sm border
          ${isUser 
            // USER: Solid Blue in Light Mode | Glass in Dark Mode
            ? 'bg-reefer-blue text-white border-transparent dark:bg-white/10 dark:text-white dark:border-white/10 rounded-2xl rounded-tr-none' 
            : isError
              // ERROR: Light Red in Light Mode | Red Glass in Dark Mode
              ? 'bg-red-50 text-red-800 border-red-100 dark:bg-red-900/20 dark:text-red-200 dark:border-red-500/30 rounded-2xl rounded-tl-none'
              // BOT: White Card in Light Mode | Dark Glass in Dark Mode
              : 'bg-white text-gray-800 border-gray-100 dark:bg-white/5 dark:text-gray-100 dark:border-white/10 rounded-2xl rounded-tl-none shadow-md dark:shadow-none'
          }
        `}>
          
          {/* Subtle Glow for Bot in Dark Mode */}
          {!isUser && !isError && (
             <div className="absolute -inset-0.5 bg-reefer-blue/0 dark:bg-reefer-blue/5 rounded-2xl blur-md -z-10"></div>
          )}

          {/* Image Preview */}
          {message.imageUrl && (
            <div className="mb-4 mt-1 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20 max-w-[280px]">
              <img 
                src={message.imageUrl} 
                alt="Uploaded context" 
                className="w-full h-auto object-cover max-h-60"
                loading="lazy"
              />
            </div>
          )}

          {/* Content with Markdown & Cursor */}
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
                     <code className={`rounded px-1 text-xs border ${isUser ? 'bg-white/20 border-white/10 text-white' : 'bg-gray-100 border-gray-200 text-gray-800 dark:bg-white/10 dark:border-white/10 dark:text-gray-200'}`} {...props}>
                       {children}
                     </code>
                   ) : (
                     <pre className={`p-3 rounded-lg overflow-x-auto text-xs my-2 border ${isUser ? 'bg-black/20 border-white/10 text-white' : 'bg-gray-900 text-gray-100 border-gray-700 dark:bg-black/40 dark:border-white/10'}`}>
                       <code className={className} {...props}>
                         {children}
                       </code>
                     </pre>
                   )
                 },
                 blockquote({children}) {
                    return (
                        <blockquote className="not-italic border-l-4 border-reefer-blue bg-blue-50 dark:bg-blue-900/20 text-gray-700 dark:text-gray-300 p-2 my-2 rounded-r text-xs md:text-sm font-medium">
                            {children}
                        </blockquote>
                    )
                 },
                 a({node, children, ...props}) {
                    return (
                        <a className="text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200 underline decoration-blue-500/30 hover:decoration-blue-500" {...props}>
                            {children}
                        </a>
                    )
                 }
               }}
             >
              {/* USE DISPLAYED TEXT HERE */}
              {displayedText}
             </ReactMarkdown>

             {/* BLINKING CURSOR */}
             {!isTypingComplete && !isUser && (
                <span className="inline-block w-1.5 h-4 ml-1 bg-reefer-blue dark:bg-blue-400 align-middle animate-pulse" />
             )}
          </div>
          
          {/* Footer */}
          <div className={`flex items-center justify-between mt-3 pt-2 border-t ${isUser ? 'border-white/20' : 'border-gray-100 dark:border-white/10'}`}>
            {!isUser && !isError ? (
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-white transition-colors"
                >
                    {isCopied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                    <span className="font-bold">{isCopied ? 'Copied' : 'Copy'}</span>
                </button>
            ) : <div />}
            
            <div className={`text-[9px] font-mono tracking-tighter uppercase ${isUser ? 'text-white/70' : 'text-gray-400 dark:text-gray-500'}`}>
              [{new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
