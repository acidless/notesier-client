import IResponse from "~/types/Response";

/*====================*/

function handleResponse(response: IResponse<unknown>) {
  return response.success;
}

/*====================*/

export default handleResponse;
