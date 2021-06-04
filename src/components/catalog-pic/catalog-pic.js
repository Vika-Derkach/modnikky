import React from "react";
import pic_dress from "../home-page/img/pic-dress.jpg";
import pic_short from "../home-page/img/pic-short.jpg";
import pic_suit from "../home-page/img/pic-suit.jpg";
import "./catalog-pic.css";
const CatalogPic = () => {
  return (
    <div>
      <div className="catalog-container">
        <div className="catalog-picture">
          <img src={pic_dress} alt="dress" />
        </div>
        <div className="catalog-picture">
          <img src={pic_short} alt="shorts" />
        </div>
        <div className="catalog-picture">
          <img src={pic_suit} alt="suits" />
        </div>
      </div>
    </div>
  );
};
export default CatalogPic;
