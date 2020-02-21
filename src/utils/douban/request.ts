import axios, { AxiosError, AxiosResponse } from 'axios';
import { DOUBAN_API_HOST } from '@/constant/douban';
import { DoubanBookStatus, IDoubanListResponse, IDoubanUserBookItem } from '@/interfaces/douban';

export const fetchBookDataById = (id: string, start: number, count: number, status: DoubanBookStatus)
    : Promise<IDoubanListResponse<IDoubanUserBookItem>> => {
    return axios.get(`${DOUBAN_API_HOST}/book/user/${id}/collections?start=${start}&count=${count}&status=${status}`)
      .then((response: AxiosResponse) => {
        return response.data;
      }).catch((error: AxiosError) => {
        console.error(error);
        return {
          errorCode: 'something wrong',
        };
      });
  };
