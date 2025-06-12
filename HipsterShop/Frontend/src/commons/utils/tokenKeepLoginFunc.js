import { Cookies } from "react-cookie";

const UseTokenKeepLogin = () => {
  const cookies = new Cookies();

  const getTokenKeepLogin = () => cookies.get("token_keep_login");
  const setTokenKeepLogin = (token) =>
    cookies.set("token_keep_login", token, { path: "/" });
  const clearTokenKeepLogin = () => {
    cookies.remove("token_keep_login", { path: "/" });
  };
  const getTokenKeepLoginPayload = () => {
    const token = getTokenKeepLogin();
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

  const isTokenKeepLoginExist = () => {
    const token = getTokenKeepLogin();
    if (!token || token === "") {
      return false;
    } else if (!getTokenKeepLoginPayload()) {
      return false;
    }
    return true;
  };

  return {
    getTokenKeepLogin,
    setTokenKeepLogin,
    clearTokenKeepLogin,
    isTokenKeepLoginExist,
    getTokenKeepLoginPayload,
  };
};

export default UseTokenKeepLogin;
