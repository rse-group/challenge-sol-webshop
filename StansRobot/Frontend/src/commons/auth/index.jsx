import React, { useEffect } from "react";
import PropTypes from "prop-types";
import tokenManager from "@/commons/utils/token";
import UseTokenKeepLogin from "@/commons/utils/tokenKeepLoginFunc";
import AuthLoginSocialService from "@/commons/services/AuthLoginSocialService";
import AuthLoginPwdService from "@/commons/services/AuthLoginPwdService";
import AuthRegisterPwdService from "@/commons/services/AuthRegisterPwdService";

const AuthContext = React.createContext(null);

export const LOADING_STATUS = {
  INITIAL: "INITIAL",
  LOADING: "LOADING",
  LOADED: "LOADED",
  FAILED: "FAILED",
};

export const AuthProvider = ({ children }) => {
  const [googleAuthStatus, setGoogleAuthStatus] = React.useState(LOADING_STATUS.INITIAL);
  const { setToken, getToken, clearToken, isTokenExist } = tokenManager();
  const {
    setTokenKeepLogin,
    clearTokenKeepLogin,
    isTokenKeepLoginExist,
    getTokenKeepLoginPayload,
  } = UseTokenKeepLogin();

  const isKeepLogin = () => {
    if (isTokenKeepLoginExist() && isTokenExist()) {
      const payload = getTokenKeepLoginPayload();
      if (payload.email) {
        return true;
      }
    }
    return false;
  };

  const getPermissions = () => {
    if (isTokenKeepLoginExist() && isTokenExist()) {
      const payload = getTokenKeepLoginPayload();
      if (payload.permissions) {
        return payload.permissions.split(",");
      }
    }
    return null;
  };

  const [permissions, setPermissions] = React.useState(getPermissions);
  const [isAuthenticated, setIsAuthenticated] = React.useState(isKeepLogin);

  const checkPermission = (permissionNeeded) => {
    if (permissions && isAuthenticated) {
      if (permissions.includes("administrator")) {
        return true;
      } else if (permissionNeeded instanceof Array) {
        return permissions.some((r) => permissionNeeded.indexOf(r) >= 0);
      } else if (permissions.includes(permissionNeeded)) {
        return true;
      }
    }
    return false;
  };

  // Initialize Google Identity Services
  useEffect(() => {
    if (!isTokenExist() || !isTokenKeepLoginExist()) {
      loadGoogleIdentityServices();
    }
  }, []);

  useEffect(() => {}, [isAuthenticated]);
  useEffect(() => {}, [permissions]);

  // Load Google Identity Services script
  const loadGoogleIdentityServices = () => {
    setGoogleAuthStatus(LOADING_STATUS.LOADING);
    
    // Check if the script is already loaded
    if (document.getElementById("google-identity-script")) {
      setGoogleAuthStatus(LOADING_STATUS.LOADED);
      return;
    }
    
    const script = document.createElement("script");
    script.id = "google-identity-script";
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      initializeGoogleAuth();
      setGoogleAuthStatus(LOADING_STATUS.LOADED);
    };
    
    script.onerror = () => {
      setGoogleAuthStatus(LOADING_STATUS.FAILED);
    };
    
    document.head.appendChild(script);
  };

  // Initialize Google Auth
  const initializeGoogleAuth = () => {
    if (!window.google || !window.google.accounts) return;

    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENTID,
      callback: handleGoogleResponse,
      auto_select: false,
    });
  };

  // Handle Google response
  const handleGoogleResponse = async (response) => {
    if (!response.credential) {
      console.error("Google login error: No credential");
      return;
    }

    // Decode the JWT to get user information
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    
    // Send data to backend
    const data = await AuthLoginSocialService.call({
      email: payload.email,
      name: payload.name,
      social_id: payload.sub,
      social_token: response.credential,
    });

    const status = data["status"];
    const allowedPermissions = data["data"]["data"]
      ? data["data"]["data"]["allowedPermissions"]
      : [];
    const tokenKeepLogin = data["data"]["data"]
      ? data["data"]["data"]["token_keep_login"]
      : [];
      
    if (status !== 200) {
      console.error("Login failed with status:", status);
      return;
    }
    
    login(response.credential, tokenKeepLogin);
    setPermissions(allowedPermissions);
  };

  // Handle Google Sign In
  const loginGoogle = async () => {
    if (googleAuthStatus !== LOADING_STATUS.LOADED) {
      console.error("Google Identity Services not loaded");
      return;
    }

    try {
      // Display the One Tap UI
      google.accounts.id.prompt();
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const logoutGoogle = async () => {
    // Revoke Google authentication
    google.accounts.id.disableAutoSelect();
    
    // Clear our tokens and state
    clearToken();
    clearTokenKeepLogin();
    setIsAuthenticated(false);
    setPermissions(null);
  };

  const loginPassword = async (params) => {
    const data = await AuthLoginPwdService.call({
      email: params.email,
      password: params.password,
    });
    var status = data["status"];
    var tokenId = data["data"]["data"] ? data["data"]["data"]["token"] : [];
    var allowedPermissions = data["data"]["data"]
      ? data["data"]["data"]["allowedPermissions"]
      : [];
    var tokenKeepLogin = data["data"]["data"]
      ? data["data"]["data"]["token_keep_login"]
      : [];
    if (
      tokenId == [] ||
      !tokenId ||
      tokenKeepLogin == [] ||
      !tokenKeepLogin ||
      status != 200
    ) {
      return;
    }
    login(tokenId, tokenKeepLogin);
    setPermissions(allowedPermissions);
  };

  const registerPassword = async (params) => {
    const data = await AuthRegisterPwdService.call({
      name: params.name,
      email: params.email,
      password: params.password,
    });
    var status = data["status"];
    var tokenId = data["data"]["data"] ? data["data"]["data"]["token"] : [];
    var allowedPermissions = data["data"]["data"]
      ? data["data"]["data"]["allowedPermissions"]
      : [];
    var tokenKeepLogin = data["data"]["data"]
      ? data["data"]["data"]["token_keep_login"]
      : [];

    if (
      tokenId == [] ||
      !tokenId ||
      tokenKeepLogin == [] ||
      !tokenKeepLogin ||
      status != 200
    ) {
      return;
    }

    login(tokenId, tokenKeepLogin);
    setPermissions(allowedPermissions);
  };

  const login = (token, tokenKeepLogin, callback) => {
    setToken(token);
    if (tokenKeepLogin) {
      setTokenKeepLogin(tokenKeepLogin);
    }
    setIsAuthenticated(true);
    if (callback) {
      callback();
    }
  };

  const logout = () => {
    // Logout from Google if that's how the user was authenticated
    logoutGoogle();
    
    // Clear tokens and reset state
    clearToken();
    clearTokenKeepLogin();
    setIsAuthenticated(false);
    setPermissions(null);
    
    // Reload Google Identity Services
    loadGoogleIdentityServices();
  };

  const getAuthValue = () => {
    return isAuthenticated;
  };

  const value = {
    permissions,
    isAuthenticated,
    login,
    loginGoogle,
    loginPassword,
    registerPassword,
    logout,
    getAuthValue,
    checkPermission,
    googleAuthStatus,
    initializeGoogleAuth
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default useAuth;