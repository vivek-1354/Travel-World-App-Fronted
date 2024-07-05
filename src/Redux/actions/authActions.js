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

export const setUserName = (name) => {
  return {
    type: "SET_USER_NAME",
    payload: name,
  };
};
export const setAccessToken = (token) => {
  return {
    type: "SET_ACCESS_TOKEN",
    payload: token,
  };
};
