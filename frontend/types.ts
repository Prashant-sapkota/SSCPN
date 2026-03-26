export enum ArticleType {
  NEWS = 'NEWS',
  PRESS_RELEASE = 'PRESS_RELEASE',
  OPINION = 'OPINION'
}

export interface Article {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl?: string;
  type: ArticleType;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  location: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  category: string;
}

export interface Publication {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}