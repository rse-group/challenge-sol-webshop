import axios from "axios";
import Token from "../utils/token";
import environment from "../utils/environment";

class PageService {
  static call = async (params = {}) => {
    const encodedData = Object.keys(params)
      .map((thekey) => `${thekey}=${encodeURI(params[thekey])}`)
      .join("&");

    try {
      const response = await axios.get(
        `${environment.rootApi}/page?${encodedData}`,
      );

      return response;
    } catch (e) {
      return {};
    }
  };
}

export default PageService;
