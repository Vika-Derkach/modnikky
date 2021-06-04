import React from "react";
import "./bag-item.css";
const BagItem = ({ product, onDelete, onDecrease, onIncrease }) => {
  const { frontPicture, title, price, color, count, size } = product;
  return (
    <div className="bag-item">
      <div className="bag-item_picture">
        <img src={frontPicture} alt="" />
      </div>
      <div className="bag-item_descr">
        <div className="bag-item_descr__title">{title}</div>
        <div className="bag-item_descr__price">USD ${price}</div>
        <div className="bag-item_descr__selector">COLOR: {color}</div>
        <div className="bag-item_descr__selector">SIZE: {size} </div>{" "}
        <div className="bag-item_descr__selector">
          QUANTITY:{" "}
          <button
            onClick={onDecrease}
            className="button-update button-quantity"
          >
            <i className="fa fa-minus" aria-hidden="true"></i>
          </button>
          <span className="quantity-number">{count}</span>
          <button
            onClick={onIncrease}
            className="button-update button-quantity"
          >
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <button onClick={onDelete} className="button-update">
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
  );
};
export default BagItem;
