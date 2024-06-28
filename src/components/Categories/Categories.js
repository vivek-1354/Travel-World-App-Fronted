import { useState, useEffect } from 'react'
import axios from 'axios'
import './Categories.css'

export const Categories = () => {
    const [categories, setCategories] = useState([])
    const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0)

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
    return (
        <section className="categories d-flex align-items-center gap-large cursor-pointer">
            {
                numberOfCategoryToShow >= 10 && <button onClick={handleShowMoreLeftClick}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
            }

            {categories && categories.map(category => {
                return (
                    <span key={category._id}>{category.category}</span>
                )
            }
            )
            }
            {
                numberOfCategoryToShow - 10 < categories.length && <button onClick={handleShowMoreRightClick}>
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            }
        </section>
    )
}

