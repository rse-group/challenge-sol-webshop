import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";

const getAllowedPermissions = (params = {}) => {
  const { getToken } = tokenManager();
  const token = getToken();
  let paramsGet = Object.assign(params, { token });
  return axios
    .get(`${environment.rootApi}/call/permission/list`, {
      params: paramsGet,
      headers: {
        Authorization: token,
      },
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getAllowedPermissions;
