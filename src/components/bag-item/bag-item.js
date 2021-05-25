import React from "react";
import "./bag-item.css";
const BagItem = ({ product, onDelete, onDecrease }) => {
  const { frontPicture, title, price, color, count } = product;
  return (
    <div className="bag-item">
      <div className="bag-item_picture">
        <img src={frontPicture} alt="" />
        {/* <img
          src="https://cdn.notinoimg.com/detail_thumb/notino/noieliw_kteb10_novy/notino-elite-collection-shopper-bag_.jpg"
          alt=""
        /> */}
      </div>
      <div className="bag-item_descr">
        <div className="bag-item_descr__title">{title}</div>
        <div className="bag-item_descr__price">USD ${price}</div>
        <div className="bag-item_descr__selector">COLOR: {color}</div>
        <div className="bag-item_descr__selector">SIZE:</div>
        <div className="bag-item_descr__selector">QUANTITY: {count}</div>
      </div>
      <button onClick={onDecrease} className="button-update button-reduce">
        <i className="fa fa-minus" aria-hidden="true"></i>
      </button>
      <button onClick={onDelete} className="button-update">
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
  );
};
export default BagItem;
