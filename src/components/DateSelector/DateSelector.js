import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

import "./DateSelector.css";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCheckin,
  handleCheckout,
  handleDateFocus,
} from "../../Redux/actions/dateActions";

export const DateSelector = ({ checkInType }) => {
  const dispatch = useDispatch();
  const dateState = useSelector((state) => state.dateReducer);
  const { checkInDate, checkOutDate } = dateState;

  const handleDateChange = (date) => {
    const type = checkInType === "in" ? "CHECK_IN" : "CHECK_OUT";
    type === "CHECK_IN"
      ? dispatch(handleCheckin(date))
      : dispatch(handleCheckout(date));
  };

  const handleDateFocusClick = () => {
    dispatch(handleDateFocus());
  };

  return (
    <DatePicker
      className="search-dest input datee"
      onChange={(date) => handleDateChange(date)}
      selected={checkInType === "in" ? checkInDate : checkOutDate}
      onFocus={handleDateFocusClick}
      dateFormat="dd/MM/yyyy"
      placeholderText={"Add Dates"}
      closeOnScroll={true}
    />
  );
};
