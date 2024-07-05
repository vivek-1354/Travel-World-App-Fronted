const initialState = {
  destination: "",
  guests: 0,
  checkInDate: null,
  checkOutDate: null,
  isSearchModalOpen: false,
  isSearchResultOpen: true,
};

const dateReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "OPEN_SEARCH_MODAL":
      newState = {
        ...state,
        isSearchModalOpen: !state.isSearchModalOpen,
      };
      return newState;
    case "CHECK_IN":
      newState = {
        ...state,
        checkInDate: action.payload,
      };
      return newState;
    case "CHECK_OUT":
      newState = {
        ...state,
        checkOutDate: action.payload,
      };
      return newState;
    case "SET_DESTINATION":
      newState = {
        ...state,
        destination: action.payload,
      };
      return newState;
    case "SET_GUESTS":
      newState = {
        ...state,
        guests: action.payload,
      };
      return newState;
    case "DATE_FOCUS":
      newState = {
        ...state,
        isSearchResultOpen: false,
      };
      return newState;
    case "DESTINATION_FOCUS":
      newState = {
        ...state,
        isSearchResultOpen: true,
      };
      return newState;
    default:
      return state;
  }
};

export default dateReducer;
