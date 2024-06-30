import '../Filter.css'
import './FreeCancel.css'

export const FreeCancel = () => {
    return (
        <div className='filter-container'>

            <div className="d-flex align-center gap-larger">
                <span className="filter-label">Free Cancelation</span>
                <label htmlFor="" className="slide">
                    <input type="checkbox" name="" id="" />
                    <span className="slider round"></span>
                </label>
            </div>

        </div>
    )
}
