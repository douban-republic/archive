import axios, { AxiosError, AxiosResponse } from 'axios';
import { DOUBAN_API_HOST } from '@/constant/douban';
import { DoubanBookStatus, IDoubanListResponse, IDoubanUserBookItem } from '@/interfaces/douban';
import { get, map, omit } from 'lodash';
import { IUserBookItem } from '@/interfaces/backup';

export const simplifyUserBookData = (userBookItem: IDoubanUserBookItem): IUserBookItem => {
  return {
    ...omit(userBookItem, ['book', 'rating']),
    rating: parseInt(get(userBookItem, 'rating.value', 0), 10),
    book_title: userBookItem.book.title,
    url: userBookItem.book.alt,
  };
};

export const createDoubanApiUrl = (subject: 'book',
                                   id: string,
                                   start: number,
                                   count: number,
                                   status: any) => {
  return `${DOUBAN_API_HOST}/${subject}/user/${id}/collections?start=${start * count}&count=${count}&status=${status}`;
};

export const fetchBookDataById = (id: string, start: number, count: number, status: DoubanBookStatus)
    : Promise<IDoubanListResponse<IDoubanUserBookItem>> => {
    return axios.get(createDoubanApiUrl('book', id, start, count, status))
      .then((response: AxiosResponse) => {
        return response.data;
      }).catch((error: AxiosError) => {
        return {
          errorCode: 'something wrong',
        };
      });
  };
