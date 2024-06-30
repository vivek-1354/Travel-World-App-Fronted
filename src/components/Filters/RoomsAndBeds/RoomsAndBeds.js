import '../Filter.css'

const numberOfAmenities = ["Any", "1", "2", "3", "4", "5"]

export const RoomsAndBeds = () => {
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
                                <span key={number} className='span-label aminity-count align-center justify-center cursor-pointer on-hover'>{number}</span>)
                        }
                    </div>
                    <div>
                        {
                            numberOfAmenities.map(number =>
                                <span key={number} className='span-label aminity-count align-center justify-center cursor-pointer on-hover'>{number}</span>)
                        }
                    </div>
                    <div>
                        {
                            numberOfAmenities.map(number =>
                                <span key={number} className='span-label aminity-count align-center justify-center cursor-pointer on-hover'>{number}</span>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

