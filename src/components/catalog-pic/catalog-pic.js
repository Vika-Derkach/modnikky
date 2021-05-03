import React from "react";
import "./catalog-pic.css";
const CatalogPic = ({ pic_catal1, pic_catal2, pic_catal3 }) => {
  return (
    <div>
      <div className="catalog-container">
        <div className="catalog-picture">
          <img src={pic_catal1} alt="" />
        </div>
        <div className="catalog-picture">
          <img src={pic_catal2} alt="" />
        </div>
        <div className="catalog-picture">
          <img src={pic_catal3} alt="" />
        </div>
      </div>
    </div>
  );
};
export default CatalogPic;
