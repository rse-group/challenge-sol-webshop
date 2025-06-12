import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";

const changeroleUser = (data = {}) => {
  let body = data;

  const { getToken } = tokenManager();
  const token = getToken();

  return axios.put(`${environment.rootApi}/call/user/changerole`, body, {
    params: { token },

    headers: {
      Authorization: token,
    },
  });
};

export default changeroleUser;
