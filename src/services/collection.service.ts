import axios, { AxiosResponse } from 'axios';

export const CollectionService = {
  fetchUserBookCollections(id: string) {
    return axios.get(`/user.${id}.book.collect.json`)
      .then((response: AxiosResponse) => response.data)
      .catch(() => []);
  },
};
