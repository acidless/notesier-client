import { ActionContext, Module } from "vuex";
import UpdateMeViewModel from "~/types/ViewModels/UpdateMeViewModel";
import MeAPI from "~/API/MeAPI/MeAPI";
import handleResponse from "~/utils/handleResponse";

/*====================*/

const actions = {
  async updateUser({ commit }: ActionContext<any, any>, data: UpdateMeViewModel) {
    const response = await MeAPI.update(data);

    if (handleResponse(response)) {
      commit("setUser", response.data);
    }
  }
};

/*====================*/

const MeStore: Module<null, any> = {
  actions,
  namespaced: false
};

/*====================*/

export default MeStore;
