import { useDispatch, useSelector } from "react-redux";
import "../Filter.css";
import "./FreeCancel.css";
import { setFreeCancel } from "../../../Redux/actions/filterActions";

export const FreeCancel = () => {
  // const { filterState, filterDispatch } = useFilter()
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filterReducer);

  const { isCancelable } = filterState;

  const handleCancelChange = (e) => {
    dispatch(setFreeCancel(e.target.checked));
  };

  return (
    <div className="filter-container">
      <div className="d-flex align-center gap-larger">
        <span className="filter-label">Free Cancelation</span>
        <label htmlFor="" className="slide">
          <input
            type="checkbox"
            onChange={handleCancelChange}
            checked={isCancelable}
          />
        </label>
      </div>
    </div>
  );
};
