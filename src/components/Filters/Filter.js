import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../context'
import './Filter.css'

import { FreeCancel, PriceRange, PropertyType, Rating, RoomsAndBeds } from './index'

export const Filter = () => {
    const navigate = useNavigate()

    const { filterState, filterDispatch } = useFilter()

    const handleCloseClick = () => {
        filterDispatch({ type: 'HANDAL_MODAL_OPEN' })
        navigate('/')
    }

    const handleClearFilterClick = () => {
        filterDispatch({
            type: 'CLEAR_ALL'
        })
    }

    const handleApplyClick = () => {
        filterDispatch({ type: 'HANDAL_MODAL_OPEN' })
        console.log({ ...filterState })
    }

    return (
        <div className='filter-modal'>
            <div className="filter-page shadow">
                <div className='d-flex align-center justify-space-between'>
                    <span className='filter-label'>Filter</span>
                    <button className="button btn-filter-close cursor-pointer d-flex align-center justify-center" onClick={handleCloseClick}>
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className="filter-content">
                    <PriceRange />
                    <RoomsAndBeds />
                    <PropertyType />
                    <Rating />
                    <FreeCancel />
                    <div className='filter-container d-flex justify-space-between'>
                        <button className='button cursor btn-link-primary' onClick={handleClearFilterClick}>Clear All</button>
                        <button className='button cursor btn-primary btn-apply' onClick={handleApplyClick}>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}