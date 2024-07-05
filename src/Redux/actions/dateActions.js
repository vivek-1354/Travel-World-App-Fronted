export const openSearchModal = () => {
  return {
    type: "OPEN_SEARCH_MODAL",
  };
};

export const handleCheckin = (date) => {
  return {
    type: "CHECK_IN",
    payload: date,
  };
};

export const handleCheckout = (date) => {
  return {
    type: "CHECK_OUT",
    payload: date,
  };
};

export const handleSetDestination = (destination) => {
  return {
    type: "SET_DESTINATION",
    payload: destination,
  };
};

export const handleSetGuests = (guests) => {
  return {
    type: "SET_GUESTS",
    payload: guests,
  };
};

export const handleDateFocus = () => {
  return {
    type: "DATE_FOCUS",
  };
};

export const handleSetDestinationFocus = () => {
  return {
    type: "DESTINATION_FOCUS",
  };
};
