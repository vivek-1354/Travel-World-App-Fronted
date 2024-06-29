import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

import './DateSelector.css'
import { useDate } from '../../context'

export const DateSelector = ({ checkInType }) => {

    const { state, dateDispatch } = useDate()

    const handleDateChange = (date) => {
        dateDispatch({ type: checkInType === "in" ? "CHECK_IN" : "CHECK_OUT", payload: date })
        // console.log(date)
    }

    return <DatePicker
        className='search-dest input'
        onChange={date => handleDateChange(date)}
        selected={checkInType === "in" ? state.checkInDate : state.checkOutDate}
        dateFormat="dd/MM/yyyy"
        placeholderText={"Add Dates"}
        closeOnScroll={true} />
}

