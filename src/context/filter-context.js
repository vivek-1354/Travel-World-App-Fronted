import { createContext, useContext, useReducer } from 'react'
import { filterReducer } from '../reducer'

const initialState = {
    isFilterModalOpen: false
}
const FilterContext = createContext(initialState)

const FilterContextProvider = ({ children }) => {

    const [state, filterDispatch] = useReducer(filterReducer, initialState)
    return (
        <FilterContext.Provider value={{ state, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => {
    return useContext(FilterContext)
}

export { useFilter, FilterContextProvider }