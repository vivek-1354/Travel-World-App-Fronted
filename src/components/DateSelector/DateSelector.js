import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./DateSelector.css";
import { useDate } from "../../context";

export const DateSelector = ({ checkInType }) => {
  const { Datestate, dateDispatch } = useDate();

  const handleDateChange = (date) => {
    dateDispatch({
      type: checkInType === "in" ? "CHECK_IN" : "CHECK_OUT",
      payload: date,
    });
    // console.log(date)
  };

  const handleDateFocus = () => {
    dateDispatch({ type: "DATE_FOCUS" });
  };

  return (
    <DatePicker
      className="search-dest input"
      onChange={(date) => handleDateChange(date)}
      selected={
        checkInType === "in" ? Datestate.checkInDate : Datestate.checkOutDate
      }
      onFocus={handleDateFocus}
      dateFormat="dd/MM/yyyy"
      placeholderText={"Add Dates"}
      closeOnScroll={true}
    />
  );
};
