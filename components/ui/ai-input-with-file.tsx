"use client";

import { CornerRightUp, FileUp, Paperclip, X, Loader2 } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { useFileInput } from "../hooks/use-file-input";
import { useAutoResizeTextarea } from "../hooks/use-auto-resize-textarea";

interface FileDisplayProps {
  fileName: string;
  onClear: () => void;
}

function FileDisplay({ fileName, onClear }: FileDisplayProps) {
  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 w-fit px-3 py-1 rounded-lg group border border-gray-200 dark:border-gray-700 shadow-sm animate-in fade-in slide-in-from-bottom-2">
      <FileUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      <span className="text-sm text-gray-700 dark:text-gray-200 max-w-[150px] truncate">{fileName}</span>
      <button
        type="button"
        onClick={onClear}
        className="ml-1 p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <X className="w-3 h-3 text-gray-500 dark:text-gray-400" />
      </button>
    </div>
  );
}

interface AIInputWithFileProps {
  id?: string;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
  accept?: string;
  maxFileSize?: number;
  onSubmit?: (message: string, file?: File) => void;
  className?: string;
  loading?: boolean;
}

export function AIInputWithFile({
  id = "ai-input-with-file",
  placeholder = "File Upload and Chat!",
  minHeight = 64,
  maxHeight = 200,
  accept = "image/*",
  maxFileSize = 5,
  onSubmit,
  className,
  loading = false
}: AIInputWithFileProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const { fileName, fileInputRef, handleFileSelect, clearFile, selectedFile } =
    useFileInput({ accept, maxSize: maxFileSize });

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight,
    maxHeight,
  });

  const handleSubmit = () => {
    if (loading) return;
    if (inputValue.trim() || selectedFile) {
      onSubmit?.(inputValue, selectedFile);
      setInputValue("");
      clearFile();
      adjustHeight(true);
    }
  };

  return (
    <div className={cn("w-full py-2 sm:py-4 px-2 sm:px-0", className)}>
      <div className="relative w-full mx-auto flex flex-col gap-2">
        {fileName && <FileDisplay fileName={fileName} onClear={clearFile} />}

        <div className="relative shadow-sm rounded-[32px]">
          <div
            className={cn(
              "absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:cursor-pointer transition-opacity z-10",
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200 dark:hover:bg-gray-600"
            )}
            onClick={() => !loading && fileInputRef.current?.click()}
          >
            <Paperclip className="w-4 h-4 transition-opacity transform scale-x-[-1] rotate-45 text-gray-500 dark:text-gray-300" />
          </div>

          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept={accept}
            disabled={loading}
          />

          <textarea
            id={id}
            placeholder={placeholder}
            disabled={loading}
            className={cn(
              "block w-full bg-white dark:bg-gray-800",
              "rounded-[32px]", // Pill shape for all devices
              "pl-12 sm:pl-14 pr-12 sm:pr-16",
              "placeholder:text-gray-500 dark:placeholder:text-gray-400",
              "border border-gray-200 dark:border-gray-700 focus:border-reefer-blue dark:focus:border-reefer-blue focus:ring-1 focus:ring-reefer-blue focus:outline-none",
              "text-gray-900 dark:text-gray-100 text-wrap",
              "py-[20px]", // 64px height - 24px text = 40px padding -> 20px top/bottom
              "text-base leading-6",
              "max-h-[200px] overflow-y-auto resize-none",
              loading && "opacity-70",
              `min-h-[${minHeight}px]`
            )}
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />

          <button
            onClick={handleSubmit}
            disabled={loading || (!inputValue.trim() && !selectedFile)}
            className={cn(
              "absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 rounded-full p-2 transition-all z-10",
              (loading || (!inputValue.trim() && !selectedFile)) 
                ? "bg-gray-100 dark:bg-gray-700 opacity-50 cursor-not-allowed text-gray-400" 
                : "bg-gray-100 dark:bg-gray-700 hover:bg-reefer-blue hover:text-white text-gray-600 dark:text-gray-300"
            )}
            type="button"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <CornerRightUp
                className={cn(
                  "w-4 h-4 transition-opacity",
                  (inputValue || selectedFile) ? "opacity-100" : "opacity-100"
                )}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
