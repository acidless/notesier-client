import LoginViewModel from "~/types/ViewModels/LoginViewModel";
import Http from "~/API/Http";
import RegisterViewModel from "~/types/ViewModels/RegisterViewModel";
import IResponse from "~/types/Response";
import IUser from "~/types/User";

/*====================*/

const AuthAPI = {
  async login(data: LoginViewModel): Promise<IResponse<IUser>> {
    return Http.request("POST", "login", data);
  },

  async register(data: RegisterViewModel): Promise<IResponse<IUser>> {
    return Http.request("POST", "register", data);
  },

  async auth(): Promise<IResponse<IUser>> {
    return Http.request("POST", "auth");
  },

  async logout(): Promise<void> {
    return Http.request("POST", "logout", undefined, false);
  }
};

/*====================*/

export default AuthAPI;
