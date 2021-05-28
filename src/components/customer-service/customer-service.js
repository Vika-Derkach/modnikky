import React from "react";
import { Element } from "react-scroll";
import "./customer-service.css";
import Delievery from "./delievery";
import OrderIssue from "./order-issue";
import Payment from "./payment";
import ReturnsRefund from "./returns-refund";
const CustomerService = () => {
  return (
    <div className="customer-service">
      <h2 className="customer-service__title">Customer Service</h2>
      <div id="our_order" className="customer-service__item">
        <Element name="our_orderz" className="customer-service__item__text">
          ORDER ISSUES
        </Element>
        <OrderIssue />
      </div>
      <div id="our_delivery" className="customer-service__item">
        <Element name="our_delivery" className="customer-service__item__text">
          DELIVERY
        </Element>
        <Delievery />
      </div>
      <div id="our_refund" className="customer-service__item">
        <Element name="our_refund" className="customer-service__item__text">
          RETURNS & REFUNDS
        </Element>
        <ReturnsRefund />
      </div>
      <div id="our_payment" className="customer-service__item">
        <Element name="our_payment" className="customer-service__item__text">
          PAYMENT
        </Element>
        <p className="payment-text">
          At Modnikky, you are shopping pieces from our luxury brands and
          partners around the globe, expertly curated for you by our team.
          Prices are determined by each our partner, therefore the price of the
          same item may vary depending on your location and where you order an
          item from.
        </p>
        <Element
          name="our_products"
          className="customer-service__item__text"
        ></Element>
        <Payment />
      </div>
    </div>
  );
};
export default CustomerService;
