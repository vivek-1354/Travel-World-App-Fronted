import './Filter.css'

import { FreeCancel, PriceRange, PropertyType, Rating, RoomsAndBeds } from './index'

export const Filter = () => {
    return (
        <div className='filter-modal'>
            <div className="filter-page shadow">
                <div className='d-flex align-center justify-space-between'>
                    <span className='filter-label'>Filter</span>
                    <button className="button btn-close cursor-pointer">
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
                        <button className='button cursor btn-link-primary'>Clear All</button>
                        <button className='button cursor btn-primary btn-apply'>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}