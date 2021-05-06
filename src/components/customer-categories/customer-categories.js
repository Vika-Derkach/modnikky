import React from "react";
import "./customer-categories.css";
const CustomerCategories = () => {
  return (
    <div className="customer-categories">
      <div className="customer-categories__title">CATEGORIES</div>
      <div className="customer-categories__items">
        <div className="customer-categories__item">
          <a href="#our_order">ORDER ISSUES</a>
        </div>
        <div className="customer-categories__item">
          <a href="#our_delivery">DELIVERY</a>
        </div>
        <div className="customer-categories__item">
          <a href="#our_refund">RETURNS & REFUNDS</a>
        </div>
        <div className="customer-categories__item">
          <a href="#our_payment">PAYMENT</a>
        </div>
        <div className="customer-categories__item">
          <a href="#our_stock">PRODUCT & STOCK</a>
        </div>
        <div className="customer-categories__item">
          <a href="#our_policy">LEGAL POLICIES</a>
        </div>
      </div>
    </div>
  );
};
export default CustomerCategories;
