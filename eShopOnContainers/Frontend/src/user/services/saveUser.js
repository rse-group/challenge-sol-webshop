import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";

const saveUser = (data = {}) => {
  let body = data;

  const { getToken } = tokenManager();
  const token = getToken();

  return axios.post(`${environment.rootApi}/call/user/save`, body, {
    params: { token },

    headers: {
      Authorization: token,
    },
  });
};

export default saveUser;
