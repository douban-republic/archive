import { DoubanBookStatus } from '@/interfaces/douban';

export interface IUserBookItem {
  status: DoubanBookStatus;
  comment?: string;
  updated: string;
  user_id: string;
  book_id: string;
  id: number;
  rating: number;
  book_title: string;
  url: string;
}
