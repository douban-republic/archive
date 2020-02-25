import axios, { AxiosResponse } from 'axios';
import { UserProps } from '@/interfaces/user';

export const UserService = {
  fetchUserList(): Promise<UserProps[]> {
    return axios.get(`${process.env.BASE_URL}users.json`)
      .then((response: AxiosResponse) => response.data)
      .catch(() => []);
  },
};
