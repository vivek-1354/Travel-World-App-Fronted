const initialState = {
  destination: "",
  guests: 0,
  checkInDate: null,
  checkOutDate: null,
  isSearchModalOpen: false,
  isSearchResultOpen: true,
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_SEARCH_MODAL":
      return {
        ...state,
        isSearchModalOpen: !state.isSearchModalOpen,
      };
    case "CHECK_IN":
      return {
        ...state,
        checkInDate: action.payload,
      };
    case "CHECK_OUT":
      return {
        ...state,
        checkOutDate: action.payload,
      };
    case "SET_DESTINATION":
      return {
        ...state,
        destination: action.payload,
      };
    case "SET_GUESTS":
      return {
        ...state,
        guests: action.payload,
      };
    case "DATE_FOCUS":
      return {
        ...state,
        isSearchResultOpen: false,
      };
    case "DESTINATION_FOCUS":
      return {
        ...state,
        isSearchResultOpen: true,
      };
    default:
      return state;
  }
};

export default dateReducer;
