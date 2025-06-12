import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";

class AuthRegisterPwdService {
  static call = async (params = {}) => {
    const { getToken } = tokenManager();
    const token = getToken();
    params = Object.assign(params, {
      token,
    });

    const encodedData = `token=${token}`;

    try {
      const response = await axios.post(
        `${environment.rootApi}/auth/user/save?${encodedData}`,
        params,
      );

      return response;
    } catch (e) {
      return {};
    }
  };
}

export default AuthRegisterPwdService;
