import { useState, useEffect } from 'react'
import axios from 'axios'
import './Categories.css'
import { useCategory, useFilter } from '../../context'
import { useNavigate } from 'react-router-dom'

export const Categories = () => {
    const [categories, setCategories] = useState([])
    const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0)
    const { hotelCategory, setCategory } = useCategory()
    const navigate = useNavigate()
    const { filterDispatch } = useFilter()

    useEffect(() => {
        (async () => {
            const response = await axios.get('http://localhost:8000/api/categories')
            const categoriesToShow = response.data.slice(
                numberOfCategoryToShow + 10 > response.data.length
                    ? response.data.length - 10
                    : numberOfCategoryToShow,
                numberOfCategoryToShow > response.data.length
                    ? response.data.length
                    : numberOfCategoryToShow + 10)
            setCategories(categoriesToShow)
        })()
    }, [numberOfCategoryToShow])

    const handleShowMoreRightClick = () => {
        // if (numberOfCategoryToShow + 10 <= categoriesLen)
        setNumberOfCategoryToShow(numberOfCategoryToShow + 10)
    }

    const handleShowMoreLeftClick = () => {
        if (numberOfCategoryToShow >= 10) {
            setNumberOfCategoryToShow(numberOfCategoryToShow - 10)
        }
    }

    const handleCategoryClick = (category) => {
        setCategory(category.category)
    }

    const handleFilterClick = () => {
        filterDispatch({ type: 'HANDAL_MODAL_OPEN' })
        navigate('/filters')
    }

    return (
        <section className="categories d-flex align-items-center gap-large cursor-pointer shadow">
            {
                numberOfCategoryToShow >= 10 && <button onClick={handleShowMoreLeftClick}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
            }

            {categories && categories.map(category => {
                return (
                    <span className={`${category.category === hotelCategory ? 'border-bottom' : ''}`} key={category._id} onClick={() => handleCategoryClick(category)}>{category.category}</span>
                )
            }
            )
            }
            {
                numberOfCategoryToShow - 10 < categories.length && <button onClick={handleShowMoreRightClick}>
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            }
            <button className='button btn-filter d-flex align-center gap-small cursor-pointer' onClick={handleFilterClick}>
                <span className="material-symbols-outlined">filter_alt</span>
                <span>Filter</span>
            </button>
        </section>
    )
}

