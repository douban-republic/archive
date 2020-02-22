import axios, { AxiosResponse } from 'axios';
import { IUserBookItem } from '@/interfaces/backup';

export const CollectionService = {
  fetchUserBookCollections(id: string): Promise<IUserBookItem[]> {
    return axios.get(`${process.env.BASE_URL}user.${id}.book.collect.json`)
      .then((response: AxiosResponse) => response.data)
      .catch(() => []);
  },
};
