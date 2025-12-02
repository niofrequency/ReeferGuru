import React from 'react';
import { Message } from '../types';
import { Bot, User, AlertTriangle, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const isError = message.isError;

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-6 group`}>
      <div className={`flex max-w-[90%] md:max-w-[80%] lg:max-w-[70%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center shadow-sm mx-2 mt-1
          ${isUser ? 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200' : isError ? 'bg-red-100 dark:bg-red-900/30 text-red-500' : 'bg-reefer-blue text-white'}
        `}>
          {isUser ? <User size={16} /> : isError ? <AlertTriangle size={16} /> : <Bot size={18} />}
        </div>

        {/* Bubble Content */}
        <div className={`
          relative px-4 py-3 rounded-2xl text-sm md:text-base shadow-sm
          ${isUser 
            ? 'bg-reefer-blue text-white rounded-tr-sm' 
            : isError
              ? 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-900/30 rounded-tl-sm'
              : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700 rounded-tl-sm'
          }
        `}>
          
          {/* Attached Image Preview */}
          {message.imageUrl && (
            <div className="mb-3 rounded-lg overflow-hidden border border-gray-200/20 bg-black/5 dark:bg-white/5 max-w-[240px]">
              <img 
                src={message.imageUrl} 
                alt="Uploaded context" 
                className="w-full h-auto object-cover max-h-48"
                loading="lazy"
              />
            </div>
          )}

          {/* Text Content */}
          <div className={`markdown prose prose-sm max-w-none 
            ${isUser ? 'prose-invert' : 'prose-slate dark:prose-invert'}
            prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-li:my-0
            prose-strong:font-bold prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          `}>
             <ReactMarkdown 
               components={{
                 // Custom renderer for code blocks to look like manual snippets
                 code({node, className, children, ...props}) {
                   const match = /language-(\w+)/.exec(className || '')
                   return !match ? (
                     <code className={`${isUser ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'} rounded px-1`} {...props}>
                       {children}
                     </code>
                   ) : (
                     <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto text-xs my-2 border-l-4 border-reefer-green">
                       <code className={className} {...props}>
                         {children}
                       </code>
                     </pre>
                   )
                 },
                 // Style blockquotes as manual references or tips
                 blockquote({children}) {
                    return (
                        <blockquote className="not-italic border-l-4 border-reefer-green bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100 p-2 my-2 rounded-r text-xs md:text-sm font-medium">
                            {children}
                        </blockquote>
                    )
                 }
               }}
             >
              {message.text}
             </ReactMarkdown>
          </div>
          
          {/* Timestamp */}
          <div className={`text-[10px] mt-2 opacity-70 text-right ${isUser ? 'text-blue-100' : 'text-gray-400 dark:text-gray-500'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};