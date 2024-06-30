import { useFilter } from '../../../context'
import '../Filter.css'

const ratings = ["1", "2", "3", "4", "5"]

export const Rating = () => {

    const { filterDispatch } = useFilter()

    const handleRatingClick = (rating) => {
        filterDispatch({
            type: 'ADD_RATINGS',
            payload: Number(rating)
        })
    }
    return (
        <div className='filter-container'>
            <span className="filter-label">Ratings</span>

            <div className="d-flex align-center gap">
                {ratings.map(rating => <span
                    className='span-label aminity-count d-flex align-center justify-center cursor-pointer star on-hover'
                    key={rating}
                    onClick={() => handleRatingClick(rating)}
                >{rating} &Up</span>)}
            </div>

        </div>
    )
}

