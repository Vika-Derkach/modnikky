import React from "react";
import { connect } from "react-redux";
import { onFilterClothes, onFilterSize } from "../../actions";
import CategoriesClothesFilter from "../categories-clothes-filter";
import TreeViewCategories from "../tree-view-categories";
import "./categories.css";
const Categories = ({ filterClothes, onFilterClothes, onFilterSize }) => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categories-container">
        <CategoriesClothesFilter
          filterClothes={filterClothes}
          onFilterClothes={onFilterClothes}
        />

        {/* <button className="button-categories">SALE</button> */}

        <div className="filters-categories">FILTERS</div>
        <TreeViewCategories onFilterSize={onFilterSize} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ filterClothes }) => {
  return {
    filterClothes: filterClothes,
  };
};

const mapDispatchToProps = {
  onFilterClothes: (name) => onFilterClothes(name),
  onFilterSize: (name) => onFilterSize(name),
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
