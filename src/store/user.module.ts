import { FETCH_USER_LIST } from '@/store/actions.type';
import { SET_USER_LIST } from '@/store/mutations.type';
import { UserService } from '@/services/user.service';
import { UserProps } from '@/interfaces/user';

const initialState = {
  users: [],
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_USER_LIST](context: any) {
    const users = await UserService.fetchUserList();
    context.commit(SET_USER_LIST, users);
    return users;
  },
};

export const mutations = {
  // tslint:disable-next-line:no-shadowed-variable
  [SET_USER_LIST](state: any, users: UserProps[]) {
    state.users = users;
  },
};

const getters = {
  // tslint:disable-next-line:no-shadowed-variable
  users(state: any) {
    return state.users;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
