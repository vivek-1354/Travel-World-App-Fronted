import { useFilter } from '../../../context'
import '../Filter.css'

const numberOfAmenities = ["Any", "1", "2", "3", "4", "5"]

export const RoomsAndBeds = () => {

    const { filterState, filterDispatch } = useFilter()
    const { noOfBeds, noOfBathrooms, noOfBedrooms } = filterState

    const handleBedroomsClick = (num) => {
        filterDispatch({
            type: "ADD_BEDROOMS",
            payload: num
        })
    }

    const handleBedsClick = (num) => {
        filterDispatch({
            type: "ADD_BEDS",
            payload: num
        })
    }

    const handleBathroomsClick = (num) => {
        filterDispatch({
            type: "ADD_BATHROOMS",
            payload: num
        })
    }

    return (
        <div className='filter-container'>
            <span className="filter-label">Rooms And Beds</span>
            <div className='d-flex align-center gap-large'>
                <div className='d-flex direction-column gap'>
                    <span className='span-label'>Bedroms</span>
                    <span className='span-label'>Beds</span>
                    <span className='span-label'>Bathrooms</span>
                </div>
                <div className='d-flex direction-column gap'>
                    <div>
                        {
                            numberOfAmenities.map(number =>
                                <span key={number} className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${noOfBedrooms.toString() === number ? 'selected' : ''}`} onClick={() => handleBedroomsClick(number)}>{number}</span>)
                        }
                    </div>
                    <div>
                        {
                            numberOfAmenities.map(number =>
                                <span key={number} className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${noOfBeds.toString() === number ? 'selected' : ''}`} onClick={() => handleBedsClick(number)}>{number}</span>)
                        }
                    </div>
                    <div>
                        {
                            numberOfAmenities.map(number =>
                                <span key={number} className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${noOfBathrooms.toString() === number ? 'selected' : ''}`} onClick={() => handleBathroomsClick(number)}>{number}</span>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

