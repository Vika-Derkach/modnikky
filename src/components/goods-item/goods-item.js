import React from "react";
import { Link } from "react-router-dom";
import "./goods-item.css";
const GoodsItem = ({ cloth, onItemSelected }) => {
  const { frontPicture } = cloth;

  return (
    <Link to="/product/:id?" className="good-item" onClick={onItemSelected}>
      <img src={frontPicture} alt="" />
    </Link>
    // <div className="good-item">
    //   <img src={frontPicture} alt="" onClick={onItemSelected} />
    //   {/* <button onClick={onItemSelected}>fdfsd</button> */}
    // </div>
  );
};
export default GoodsItem;
