import React from "react";
import TreeViewCategories from "../tree-view-categories";
import "./categories.css";
const Categories = () => {
  return (
    <div>
      <h2>Categories</h2>
      <div className="categories-container">
        <button className="button-categories">TOPS</button>
        <button className="button-categories">TEES AND TANKS</button>
        <button className="button-categories">SHIRTS</button>
        <button className="button-categories">DRESSES</button>
        <button className="button-categories">JACKETS</button>
        <button className="button-categories">KNITWEAR</button>
        <button className="button-categories">JUMPSUITS</button>
        <button className="button-categories">BOTTOMS</button>
        <button className="button-categories">INTIMATES</button>
        <button className="button-categories">SHORTS</button>
        <button className="button-categories">JEANS</button>
        <button className="button-categories">SKIRTS</button>
        <button className="button-categories">SALE</button>
        <button className="button-categories">SHOP ALL</button>
        <div className="filters-categories">FILTERS</div>
        <TreeViewCategories />
      </div>
    </div>
  );
};
export default Categories;
