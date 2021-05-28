import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./customer-categories.css";
const CustomerCategories = () => {
  return (
    <div className="customer-categories">
      <div className="customer-categories__title">CATEGORIES</div>
      <div className="customer-categories__items">
        <div className="customer-categories__item">
          <ScrollLink
            activeClass="active"
            to="our_order"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="customer-categories__link"
          >
            ORDER ISSUES
          </ScrollLink>
        </div>
        <div className="customer-categories__item">
          <ScrollLink
            activeClass="active"
            to="our_delivery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="customer-categories__link"
          >
            DELIVERY
          </ScrollLink>
        </div>
        <div className="customer-categories__item">
          <ScrollLink
            activeClass="active"
            to="our_refund"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="customer-categories__link"
          >
            RETURNS & REFUNDS
          </ScrollLink>
        </div>
        <div className="customer-categories__item">
          <ScrollLink
            activeClass="active"
            to="our_payment"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="customer-categories__link"
          >
            PAYMENT
          </ScrollLink>
        </div>
        <div className="customer-categories__item">
          <ScrollLink
            activeClass="active"
            to="our_products"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="customer-categories__link"
          >
            PRODUCT & STOCK
          </ScrollLink>
        </div>
        <div className="customer-categories__item">
          <ScrollLink
            activeClass="active"
            to="our_products"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="customer-categories__link"
          >
            LEGAL POLICIES
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};
export default CustomerCategories;
