import React from "react";
import "./goods-item.css";
const GoodsItem = ({ cloth }) => {
  const { frontPicture } = cloth;
  return (
    <div className="good-item">
      <img src={frontPicture} alt="" />
    </div>
  );
};
export default GoodsItem;
