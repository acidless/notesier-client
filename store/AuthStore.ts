import LoginViewModel from "~/types/ViewModels/LoginViewModel";
import { ActionContext, Module } from "vuex";
import IUser from "~/types/User";
import AuthAPI from "~/API/AuthAPI/AuthAPI";
import RegisterViewModel from "~/types/ViewModels/RegisterViewModel";
import handleResponse from "~/utils/handleResponse";
import withLoading from "~/utils/withLoading";

/*====================*/

function state() {
  return {
    user: null as null | IUser,
    errors: [] as Array<string>
  };
}

type AuthStateType = ReturnType<typeof state>;

/*====================*/

const mutations = {
  setUser(state: AuthStateType, user: IUser) {
    state.user = user;
  },

  setErrors(state: AuthStateType, error: string | Array<string>) {
    state.errors = new Array().concat(error);
  }
};

/*====================*/

const actions = {
  async login({ commit }: ActionContext<AuthStateType, any>, data: LoginViewModel) {
    await withLoading(commit, async () => {
      const response = await AuthAPI.login(data);

      if (!handleResponse(response)) {
        commit("setErrors", response.error);
      } else {
        commit("setUser", response.data);
      }
    });
  },

  async register({ commit }: ActionContext<AuthStateType, any>, data: RegisterViewModel) {
    await withLoading(commit, async () => {
      const response = await AuthAPI.register(data);

      if (!handleResponse(response)) {
        commit("setErrors", response.error);
      } else {
        commit("setUser", response.data);
      }
    });
  },

  async auth({ commit }: ActionContext<AuthStateType, any>) {
    const response = await AuthAPI.auth();

    if (handleResponse(response)) {
      commit("setUser", response.data);
    } else {
      commit("setUser", undefined);
    }
  },

  async logout({ commit }: ActionContext<AuthStateType, any>) {
    await AuthAPI.logout();

    commit("setUser", undefined);
  }
};

/*====================*/

const getters = {
  getErrors(state: AuthStateType) {
    return state.errors;
  },
  getUser(state: AuthStateType) {
    return state.user;
  }
};

/*====================*/

const AuthStore: Module<AuthStateType, any> = {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
};

/*====================*/

export default AuthStore;
