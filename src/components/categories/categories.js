import React from "react";
import { connect } from "react-redux";
import { onFilterClothes } from "../../actions";
import { withModnikkyService } from "../hoc";
import TreeViewCategories from "../tree-view-categories";
import "./categories.css";
const Categories = ({ filterClothes, onFilterClothes }) => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categories-container">
        <CategoriesClothesFilter
          filterClothes={filterClothes}
          onFilterClothes={onFilterClothes}
        />

        <button className="button-categories">SALE</button>

        <div className="filters-categories">FILTERS</div>
        <TreeViewCategories />
      </div>
    </div>
  );
};
const CategoriesClothesFilter = ({ onFilterClothes, filterClothes }) => {
  const buttonsFilter = [
    { name: "shop-all", label: "SHOP ALL" },
    { name: "shorts", label: "SHORTS" },
    { name: "jeans", label: "JEANS" },
    { name: "jacket", label: "JACKETS" },
    { name: "top", label: "TOPS" },
    { name: "tee-and-trank", label: "TEES AND TANKS" },
    { name: "dress", label: "SHIRT" },
    { name: "dress", label: "DRESSES" },
    { name: "knitwear", label: "KNITWEAR" },
    { name: "jumpsuit", label: "JUMPSUITS" },
    { name: "bottom", label: "BOTTOMS" },
    { name: "hoodie", label: "HOODIES" },
    { name: "skirt", label: "SKIRTS" },
  ];

  const buttons = buttonsFilter.map(({ name, label }) => {
    const isActive = filterClothes === name;

    const clazz = isActive ? "button-active" : "button-nonactive";
    return (
      <button
        type="button"
        className={`button-categories ${clazz}`}
        key={name}
        onClick={() => onFilterClothes(name)}
      >
        {label}
      </button>
    );
  });
  return <div className="categories-container">{buttons}</div>;
};
const mapStateToProps = ({ filterClothes }) => {
  return {
    filterClothes: filterClothes,
  };
};

const mapDispatchToProps = {
  onFilterClothes: (name) => onFilterClothes(name),
};
export default withModnikkyService()(
  connect(mapStateToProps, mapDispatchToProps)(Categories)
);
