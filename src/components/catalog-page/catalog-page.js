import React from "react";
import Categories from "../categories";
import Goods from "../goods";
import "./catalog-page.css";
const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <div className="catalog-page-container">
        <div className="catalog-page-categories">
          <Categories />
        </div>
        <div className="catalog-page-goods">
          <Goods />
        </div>
      </div>
    </div>
  );
};
export default CatalogPage;
