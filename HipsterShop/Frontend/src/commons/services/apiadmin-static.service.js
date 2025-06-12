import axios from "axios";
import Token from "../utils/token";
import environment from "../utils/environment";

class ApiadminStaticService {
  static call = async (params = {}) => {
    const encodedData = Object.keys(params)
      .map((thekey) => `${thekey}=${encodeURI(params[thekey])}`)
      .join("&");

    try {
      const response = await axios.get(
        `${environment.rootApi}/apiadmin/static?${encodedData}`,
      );

      return response;
    } catch (e) {
      return {};
    }
  };
}

export default ApiadminStaticService;
