import { Module } from "vuex";

/*====================*/

function state() {
  return {
    isLoading: false
  };
}
type AppStateType = ReturnType<typeof state>;

/*====================*/

const mutations = {
  setLoadingStatus(state: AppStateType, isLoading: boolean) {
    state.isLoading = isLoading;
  }
};

/*====================*/

const getters = {
  getLoadingStatus(state: AppStateType) {
    return state.isLoading;
  }
};

/*====================*/

const AppStore: Module<AppStateType, any> = {
  namespaced: false,
  state,
  mutations,
  getters
};

/*====================*/

export default AppStore;
