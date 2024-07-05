import { useDispatch, useSelector } from "react-redux";
import "../Filter.css";
import { setRatings } from "../../../Redux/actions/filterActions";

const ratings = ["1", "2", "3", "4", "5"];

export const Rating = () => {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filterReducer);

  const handleRatingClick = (rating) => {
    const ratings = Number(rating);
    dispatch(setRatings(ratings));
  };
  return (
    <div className="filter-container">
      <span className="filter-label">Ratings</span>

      <div className="d-flex align-center gap">
        {ratings.map((rating) => (
          <span
            className={`span-label aminity-count d-flex align-center justify-center cursor-pointer star on-hover ${
              filterState.noOfRatings.toString() === rating ? "selected" : ""
            }`}
            key={rating}
            onClick={() => handleRatingClick(rating)}
          >
            {rating} &Up
          </span>
        ))}
      </div>
    </div>
  );
};
