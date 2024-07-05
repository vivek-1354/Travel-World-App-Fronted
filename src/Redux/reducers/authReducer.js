const initialState = {
  isAuthModalOpen: false,
  isMenuModalOpen: false,
  username: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
  selectedTab: "login",
  accessToken: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_AUTH_MODAL":
      return { ...state, isAuthModalOpen: !state.isAuthModalOpen };
    case "OPEN_MENU_MODAL":
      return { ...state, isMenuModalOpen: !state.isMenuModalOpen };
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
    case "LOGOUT":
      return {
        ...state,
        username: "",
        accessToken: "",
      };
    case "SET_USER_NAME":
      return { ...state, username: action.payload };
    case "SET_ACCESS_TOKEN":
      return { ...state, accessToken: action.payload };
    default:
      return state;
  }
};

export default authReducer;
