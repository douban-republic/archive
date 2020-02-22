import { FETCH_USER_BOOK_COLLECTIONS } from '@/store/actions.type';
import { SET_USER_BOOK_COLLECTIONS } from '@/store/mutations.type';
import { CollectionService } from '@/services/collection.service';
import { IUserBookItem } from '@/interfaces/backup';

const initialState = {};

export const state = { ...initialState };

export const actions = {
  async [FETCH_USER_BOOK_COLLECTIONS](context: any, id: string) {
    const collections = await CollectionService.fetchUserBookCollections(id);
    const userBookCollections = {
      id,
      collections,
    };
    context.commit(SET_USER_BOOK_COLLECTIONS, userBookCollections);
    return userBookCollections;
  },
};

export const mutations = {
  // tslint:disable-next-line:no-shadowed-variable
  [SET_USER_BOOK_COLLECTIONS](state: any, { id, collections }: {
    id: string,
    collections: IUserBookItem[],
  }) {
    if (!state[id]) {
      state[id] = {};
    }
    state[id].books = collections;
  },
};

const getters = {
  // tslint:disable-next-line:no-shadowed-variable
  getCollectionsByUserId: (state: any) => (id: string) => state[id],
};

export default {
  state,
  actions,
  mutations,
  getters,
};
