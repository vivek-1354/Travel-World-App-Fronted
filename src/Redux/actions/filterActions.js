export const handleModalOpen = () => {
  return {
    type: "HANDAL_MODAL_OPEN",
  };
};

export const setMinimunPrice = (minPrice) => {
  return {
    type: "MINIMUM_PRICE",
    payload: minPrice,
  };
};

export const setMaximunPrice = (maxPrice) => {
  return {
    type: "MAXIMUM_PRICE",
    payload: maxPrice,
  };
};

export const setBedrooms = (rooms) => {
  return {
    type: "ADD_BEDROOMS",
    payload: rooms,
  };
};

export const setBathrooms = (bathrooms) => {
  return {
    type: "ADD_BATHROOMS",
    payload: bathrooms,
  };
};

export const setBeds = (beds) => {
  return {
    type: "ADD_BEDS",
    payload: beds,
  };
};

export const setPropertyType = (type) => {
  return {
    type: "ADD_PROPERTY_TYPE",
    payload: type,
  };
};

export const setRatings = (ratings) => {
  return {
    type: "ADD_RATINGS",
    payload: ratings,
  };
};

export const setFreeCancel = (isCancelable) => {
  return {
    type: "FREE_CANCEL",
    payload: isCancelable,
  };
};

export const clearFilterData = () => {
  return {
    type: "CLEAR_ALL",
  };
};
