import React from 'react'
import DatePicker from 'react-datepicker'
import './DateSelector.css'

export const DateSelector = () => {
    return <DatePicker dateFormat={"dd/MM/yyyy"} placeholderText='Check In' closeOnScroll={true} />
}

