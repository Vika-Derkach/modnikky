import React from "react";
import { Link } from "react-router-dom";
import "./goods-item.css";
const GoodsItem = ({ cloth }) => {
  const { frontPicture } = cloth;
  return (
    <Link to="/product/:id?" className="good-item">
      <img src={frontPicture} alt="" />
    </Link>
  );
};
export default GoodsItem;
