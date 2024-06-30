import './Filter.css'

import { PriceRange, PropertyType, Rating, RoomsAndBeds } from './index'

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
                </div>
            </div>
        </div>
    )
}