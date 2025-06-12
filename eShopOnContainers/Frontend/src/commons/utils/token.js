import { Cookies } from "react-cookie";

const tokenManager = () => {
  const cookies = new Cookies();

  const getToken = () => cookies.get("token");
  const setToken = (token) => cookies.set("token", token, { path: "/" });
  const clearToken = () => {
    cookies.remove("token", { path: "/" });
  };
  const getTokenPayload = () => {
    const token = getToken();
    var base64Url = token.split(".")[1];
    try {
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join(""),
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      return null;
    }
  };

  const isTokenExist = () => {
    const token = getToken();
    if (!token || token === "") {
      return false;
    } else if (!getTokenPayload()) {
      return false;
    }
    return true;
  };

  return { getToken, setToken, clearToken, isTokenExist };
};

export default tokenManager;
