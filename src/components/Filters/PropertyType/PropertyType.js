import { useDispatch, useSelector } from "react-redux";
import "../Filter.css";
import { v4 as uuid } from "uuid";
import { setPropertyType } from "../../../Redux/actions/filterActions";

const propertyType = [
  { id: uuid(), type: "House" },
  { id: uuid(), type: "Guest House" },
  { id: uuid(), type: "Flat" },
  { id: uuid(), type: "Hotel" },
];

export const PropertyType = () => {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filterReducer);

  const handlePropertyClick = (propertyType) => {
    dispatch(setPropertyType(propertyType));
  };

  return (
    <div className="filter-container">
      <span className="filter-label">Property Type</span>
      <div className="d-flex gap-large">
        {propertyType.map(({ id, type }) => (
          <span
            key={id}
            className={`span-label property-type cursor-pointer align-center justify-center on-hover ${
              filterState.propertyType === type ? "selected" : ""
            }`}
            onClick={() => handlePropertyClick(type)}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
