import { createContext, useContext, useReducer } from "react";

import { dateReducer } from "../reducer";

const initialState = {
  destination: "",
  guests: 0,
  checkInDate: null,
  checkOutDate: null,
  isSearchModalOpen: false,
  isSearchResultOpen: true,
};
const DateContext = createContext(initialState);

const DateProvider = ({ children }) => {
  const [Datestate, dateDispatch] = useReducer(dateReducer, initialState);

  return (
    <DateContext.Provider value={{ Datestate, dateDispatch }}>
      {children}
    </DateContext.Provider>
  );
};

const useDate = () => {
  return useContext(DateContext);
};

export { DateProvider, useDate };
