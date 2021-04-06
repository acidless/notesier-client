import LoginViewModel from "~/types/ViewModels/LoginViewModel";

/*====================*/

export default interface RegisterViewModel extends LoginViewModel {
  email: string;
}
