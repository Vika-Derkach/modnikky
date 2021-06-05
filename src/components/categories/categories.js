import React from "react";
import { connect } from "react-redux";
import {
  onFilterClothes,
  onFilterFabric,
  onFilterPrice,
  onFilterSize,
} from "../../actions";
import CategoriesClothesFilter from "../categories-clothes-filter";
import SearchInput from "../search-input";
import TreeViewCategories from "../tree-view-categories";
import "./categories.css";
const Categories = ({
  filterClothes,
  onFilterClothes,
  onFilterSize,
  filterSize,
  onFilterPrice,
  onFilterFabric,
}) => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categories-media_input">
        <SearchInput />
      </div>
      <div className="categories-container">
        <CategoriesClothesFilter
          filterClothes={filterClothes}
          onFilterClothes={onFilterClothes}
        />

        {/* <button className="button-categories">SALE</button> */}

        <div className="filters-categories">FILTERS</div>
        <TreeViewCategories
          onFilterSize={onFilterSize}
          filterSize={filterSize}
          onFilterPrice={onFilterPrice}
          onFilterFabric={onFilterFabric}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ filterClothes, filterSize }) => {
  return {
    filterClothes: filterClothes,
    filterSize: filterSize,
  };
};

const mapDispatchToProps = {
  onFilterClothes: (name) => onFilterClothes(name),
  onFilterSize: (name) => onFilterSize(name),
  onFilterPrice: (name) => onFilterPrice(name),
  onFilterFabric: (name) => onFilterFabric(name),
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
