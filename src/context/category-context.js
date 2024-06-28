import { createContext, useContext, useState } from 'react'

const initialValue = "National Parks"
const CategoryContext = createContext(initialValue)

export const CategoryProvider = ({ children }) => {
    const [hotelCategory, setCategory] = useState(initialValue)
    return (
        <CategoryContext.Provider value={{ hotelCategory, setCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory = () => {
    return useContext(CategoryContext)
}

// module.exports = { useCategory, CategoryProvider }