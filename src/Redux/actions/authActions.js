export const openAuthModal = () => {
  return {
    type: "HANDLE_AUTH_MODAL",
  };
};

export const openMenuModal = () => {
  return {
    type: "HANDLE_MENU_MODAL",
  };
};

export const handleLogin = () => {
  return {
    type: "HANDLE_LOGIN",
  };
};

export const handleSingup = () => {
  return {
    type: "HANDLE_SIGNUP",
  };
};
export const handleLogout = () => {
  return {
    type: "LOGOUT",
  };
};

export const clearUserInfo = () => {
  return {
    type: "CLEAR_USER_INFO",
  };
};

export const setUserName = () => {
  return {
    type: "SET_USER_NAME",
  };
};
export const setAccessToken = () => {
  return {
    type: "SET_ACCESS_TOKEN",
  };
};
