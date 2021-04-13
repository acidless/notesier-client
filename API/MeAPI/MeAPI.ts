import Http from "~/API/Http";
import IResponse from "~/types/Response";
import IUser from "~/types/User";
import UpdateMeViewModel from "~/types/ViewModels/UpdateMeViewModel";

/*====================*/

const MeAPI = {
  async update(data: UpdateMeViewModel): Promise<IResponse<IUser>> {
    return Http.request("PATCH", "me", data);
  }
};

/*====================*/

export default MeAPI;
