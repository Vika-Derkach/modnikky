import React from "react";
import "./bag-item.css";
const BagItem = () => {
  return (
    <div className="bag-item">
      <div className="bag-item_picture">
        <img
          src="https://cdn.notinoimg.com/detail_thumb/notino/noieliw_kteb10_novy/notino-elite-collection-shopper-bag_.jpg"
          alt=""
        />
      </div>
      <div className="bag-item_descr">
        <div className="bag-item_descr__title">
          WHITE BEAUTY MRS BLONDES <br /> MID LENGTH DENIM SHORT
        </div>
        <div className="bag-item_descr__price">USD $340.00</div>
        <div className="bag-item_descr__selector">COLOR:</div>
        <div className="bag-item_descr__selector">SIZE:</div>
        <div className="bag-item_descr__selector">QUANTITY:</div>
      </div>
      <button className="button-remove">
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
  );
};
export default BagItem;
