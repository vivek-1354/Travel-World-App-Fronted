export const authReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_AUTH_MODAL":
      return { ...state, isAuthModalOpen: !state.isAuthModalOpen };
    case "HANDLE_LOGIN":
      return { ...state, selectedTab: "login" };
    case "HANDLE_SIGNUP":
      return { ...state, selectedTab: "signup" };
    case "CLEAR_USER_INFO":
      return {
        ...state,
        username: "",
        number: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    case "ADD_USER_INFO":
      return {
        ...state,
        username: action.payload.username,
        number: action.payload.number,
        email: action.payload.email,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
      };
    case "SET_USER_NAME":
      return { ...state, username: action.payload };
    case "SET_ACCESS_TOKEN":
      return { ...state, accessToken: action.payload };
    default:
      return state;
  }
};
