import { useState, useEffect } from "react";
import axios from "axios";
import "./Categories.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Redux/actions/categoryActions";
import { handleModalOpen } from "../../Redux/actions/filterActions";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);
  const hotelCategory = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/categories");
      const categoriesToShow = response.data.slice(
        numberOfCategoryToShow + 10 > response.data.length
          ? response.data.length - 10
          : numberOfCategoryToShow,
        numberOfCategoryToShow > response.data.length
          ? response.data.length
          : numberOfCategoryToShow + 10
      );
      setCategories(categoriesToShow);
    })();
  }, [numberOfCategoryToShow]);

  const handleShowMoreRightClick = () => {
    setNumberOfCategoryToShow(numberOfCategoryToShow + 10);
  };

  const handleShowMoreLeftClick = () => {
    if (numberOfCategoryToShow >= 10) {
      setNumberOfCategoryToShow(numberOfCategoryToShow - 10);
    }
  };

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category.category));
  };

  const handleFilterClick = () => {
    dispatch(handleModalOpen());
  };

  return (
    <section className="categories d-flex align-items-center gap-large cursor-pointer shadow">
      {numberOfCategoryToShow >= 10 && (
        <span onClick={handleShowMoreLeftClick}>
          <span className=" arrow material-symbols-outlined">chevron_left</span>
        </span>
      )}

      {categories &&
        categories.map((category) => {
          return (
            <span
              className={`category ${
                category.category === hotelCategory?.category
                  ? "border-bottom"
                  : ""
              }`}
              key={category._id}
              onClick={() => handleCategoryClick(category)}
            >
              {category.category}
            </span>
          );
        })}
      {numberOfCategoryToShow - 10 < categories.length && (
        <span onClick={handleShowMoreRightClick}>
          <span className=" arrow material-symbols-outlined">
            chevron_right
          </span>
        </span>
      )}
      <button
        className="button btn-filter d-flex align-center gap-small cursor-pointer"
        onClick={handleFilterClick}
      >
        <span className="material-symbols-outlined">filter_alt</span>
        <span>Filter</span>
      </button>
    </section>
  );
};
