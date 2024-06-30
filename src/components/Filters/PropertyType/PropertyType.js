import { useFilter } from '../../../context'
import '../Filter.css'
import { v4 as uuid } from 'uuid'

const propertyType = [
    { id: uuid(), type: "House" },
    { id: uuid(), type: "Guest House" },
    { id: uuid(), type: "Flat" },
    { id: uuid(), type: "Hotel" },
]

export const PropertyType = () => {

    const { filterDispatch } = useFilter()

    const handlePropertyClick = (propertyType) => {
        filterDispatch({
            type: 'ADD_PROPERTY_TYPE',
            payload: propertyType
        })
    }

    return (
        <div className='filter-container'>
            <span className='filter-label'>Property Type</span>
            <div className='d-flex gap-large'>
                {
                    propertyType.map(({ id, type }) => (
                        <span key={id} className='span-level property-type cursor-pointer align-center justify-center on-hover'
                            onClick={() => handlePropertyClick(type)}>
                            {type}
                        </span>))
                }
            </div>
        </div>
    )
}
