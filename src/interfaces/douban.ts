export interface IDoubanListResponse<T> {
  count: number;
  start: number;
  total: number;
  collections: T[];
}

export enum DoubanBookStatus {
  reading = 'reading',
  read = 'read',
  wish = 'wish',
}

export interface IDoubanTag {
  count: number;
  name: string;
  title: string;
}

export interface IDoubanImage {
  small: string;
  large: string;
  medium: string;
}

export interface IDoubanBook {
  rating: IDoubanRating;
  subtitle?: string;
  author: string[];
  pubdate?: string;
  tags: IDoubanTag[];
  origin_title?: string;
  image?: string;
  binding?: string; // 精装、简装
  translator: string[];
  catalog?: string;
  pages: string;
  images?: IDoubanImage;
  alt: string;
  id: string;
  publisher?: string;
  isbn10?: string;
  isbn13?: string;
  title: string;
  url: string;
  alt_title?: string;
  author_intro?: string;
  summary?: string;
  price?: string;
}

export interface IDoubanUserRating {
  max: number;
  min: number;
  value: string;
}

export interface IDoubanRating {
  max: number;
  numRaters: number;
  average: string;
  min: number;
}

export interface IDoubanUserBookItem {
  status: DoubanBookStatus;
  comment?: string;
  updated: string;
  user_id: string;
  book_id: string;
  id: number;
  tags?: string[];
  rating?: IDoubanUserRating;
  book: IDoubanBook;
}
