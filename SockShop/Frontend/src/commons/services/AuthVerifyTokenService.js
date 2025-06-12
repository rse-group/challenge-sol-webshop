import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";

class AuthVerifyTokenService {
  static call = async (data = {}) => {
    const { getToken } = tokenManager();
    const token = getToken();
    // params = Object.assign(params, {
    //     token
    // });

    // const encodedData = `token=${token}`;

    try {
      const response = await axios.post(
        `${environment.rootApi}/auth/verify-token`,
        data,
        {
          params: { token },

          headers: {
            Authorization: token,
          },
        },
      );

      return response;
    } catch (e) {
      return {};
    }
  };
}

export default AuthVerifyTokenService;
