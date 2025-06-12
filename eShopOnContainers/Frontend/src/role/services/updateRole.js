import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";

const updateRole = (data = {}) => {
  let body = data;

  const { getToken } = tokenManager();
  const token = getToken();

  return axios.put(`${environment.rootApi}/call/role/update`, body, {
    params: { token },

    headers: {
      Authorization: token,
    },
  });
};

export default updateRole;
