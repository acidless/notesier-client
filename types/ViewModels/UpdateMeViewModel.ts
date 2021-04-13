import LoginViewModel from "~/types/ViewModels/LoginViewModel";

/*====================*/

export default interface UpdateMeViewModel extends LoginViewModel {
  currentPassword: string;
}
