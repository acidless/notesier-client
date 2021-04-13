import Vuex from "vuex";
import AuthStore from "~/store/AuthStore";
import MeStore from "~/store/MeStore";

/*====================*/

const store = new Vuex.Store({
  modules: { AuthStore, MeStore }
});
