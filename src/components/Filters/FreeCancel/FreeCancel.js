import { useFilter } from '../../../context'
import '../Filter.css'
import './FreeCancel.css'

export const FreeCancel = () => {

    const { filterState, filterDispatch } = useFilter()

    const { isCancelable } = filterState

    console.log(isCancelable)
    const handleCancelChange = (e) => {
        filterDispatch({
            type: 'FREE_CANCEL',
            payload: e.target.checked // true or false
        })
    }

    return (
        <div className='filter-container'>
            <div className="d-flex align-center gap-larger">
                <span className="filter-label">Free Cancelation</span>
                <label htmlFor="" className="slide">
                    <input type="checkbox" onChange={handleCancelChange} checked={isCancelable} />
                </label>
            </div>

        </div>
    )
}
