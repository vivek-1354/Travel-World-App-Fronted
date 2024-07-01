export const authReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_AUTH_MODAL":
      return { ...state, isAuthModalOpen: !state.isAuthModalOpen };
    case "HANDLE_LOGIN":
      return { ...state, selectedTab: "login" };
    case "HANDLE_SIGNUP":
      return { ...state, selectedTab: "signup" };

    default:
      return state;
  }
};
