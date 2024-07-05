const initialState = {
  isFilterModalOpen: false,
  priceRange: [300, 20000],
  noOfBathrooms: "Any",
  noOfBeds: "Any",
  noOfBedrooms: "Any",
  propertyType: "Any",
  noOfRatings: "Any",
  isCancelable: true,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDAL_MODAL_OPEN":
      return { ...state, isFilterModalOpen: !state.isFilterModalOpen }; // 合并新的过滤器状态
    case "MINIMUM_PRICE":
      return {
        ...state,
        priceRange: [
          Math.min(
            action.payload.newValue[0],
            action.payload.priceRange[1] - action.payload.minDifference
          ),
          action.payload.priceRange[1],
        ],
      };
    case "MAXIMUM_PRICE":
      return {
        ...state,
        priceRange: [
          action.payload.priceRange[0],
          Math.max(
            action.payload.newValue[1],
            action.payload.priceRange[0] + action.payload.minDifference
          ),
        ],
      };
    case "ADD_BEDROOMS":
      return {
        ...state,
        noOfBedrooms:
          action.payload === "Any" ? action.payload : Number(action.payload),
      };
    case "ADD_BATHROOMS":
      return {
        ...state,
        noOfBathrooms:
          action.payload === "Any" ? action.payload : Number(action.payload),
      };
    case "ADD_BEDS":
      return {
        ...state,
        noOfBeds:
          action.payload === "Any" ? action.payload : Number(action.payload),
      };
    case "ADD_PROPERTY_TYPE":
      return {
        ...state,
        propertyType: action.payload,
      };
    case "ADD_RATINGS":
      return {
        ...state,
        noOfRatings: action.payload,
      };
    case "FREE_CANCEL":
      return {
        ...state,
        isCancelable: action.payload,
      };
    case "CLEAR_ALL":
      return {
        ...state,
        priceRange: [300, 20000],
        noOfBathrooms: "Any",
        noOfBeds: "Any",
        noOfBedrooms: "Any",
        propertyType: "Any",
        noOfRatings: "Any",
        isCancelable: false,
      };
    default:
      return state;
  }
};

export default filterReducer;
