export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  imageUrl?: string; // Stored as Data URI for persistence
  isError?: boolean;
}

export enum SendingStatus {
  IDLE = 'IDLE',
  SENDING = 'SENDING',
  THINKING = 'THINKING',
  RECEIVING = 'RECEIVING',
  ERROR = 'ERROR'
}

export interface Attachment {
  file: File;
  previewUrl: string;
  base64: string;
  mimeType: string;
}

export interface StoredChat {
  id: string;
  title: string;
  messages: Message[];
  updatedAt: number;
}