import React from "react";
import { connect } from "react-redux";
import { onFilterClothes } from "../../actions";
import TreeViewCategories from "../tree-view-categories";
import "./categories.css";
const Categories = () => {
  return (
    <div className="categories">
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
const CategoriesClothesFilter = ({ filter, onFilterChange }) => {
  const buttonsFil = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  // const = this.props;
  const buttons = buttonsFil.map(({ name, label }) => {
    const isActive = filter === name;

    const clazz = isActive ? "btn-info" : "btn-outline-secondary";
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => onFilterChange(name)}
      >
        {label}
      </button>
    );
  });
  return <div className="categories-container">{buttons}</div>;
};
const mapStateToProps = ({ clothes, loading, error }) => {
  return { clothes, loading, error };
};
const mapDispatchToProps = {
  onFilterClothes: onFilterClothes,
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
