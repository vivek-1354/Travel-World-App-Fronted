import { createContext, useContext, useReducer } from 'react'
import { filterReducer } from '../reducer'

const initialState = {
    isFilterModalOpen: false,
    priceRange: [300, 20000],
    noOfBathrooms: "Any",
    noOfBeds: "Any",
    noOfBedrooms: "Any",
    propertyType: "Any",
    noOfRatings: "Any",
    freeCancelable: "Any",

}
const FilterContext = createContext(initialState)

const FilterContextProvider = ({ children }) => {

    const [filterState, filterDispatch] = useReducer(filterReducer, initialState)
    return (
        <FilterContext.Provider value={{ filterState, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => {
    return useContext(FilterContext)
}

export { useFilter, FilterContextProvider }