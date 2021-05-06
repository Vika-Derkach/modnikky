import React from "react";
import ContainedButton from "../contained-button";
import SizeSelector from "../size-selector";
import "./product-section.css";
const ProductSection = () => {
  const button_text = "ADD TO BAG";
  return (
    <div className="product-section">
      <div className="product-section_picture">
        <img
          src="https://i.pinimg.com/736x/05/da/14/05da143bb08929bc209598c319ec2ce2.jpg"
          alt=""
        />
      </div>
      <div className="product-section_picture">
        <img
          src="https://i.pinimg.com/originals/24/11/72/2411729f35288ffa12641f60980a1f49.jpg"
          alt=""
        />
      </div>
      <div className="product-section_text">
        <div className="product-section_text__title">
          CHALK SAINTS BOYFRIEND
        </div>
        <div className="product-section_text__price">USD $300.00</div>
        <div className="product-section_text__order">PRE-ORDER</div>
        <div className="product-section_text__color">COLOR</div>
        <div className="product-section_text__size">
          <div className="product-section_text__size__title">SIZE</div>
          <div className="size-button">
            <SizeSelector />
          </div>
        </div>
        <div className="product-section_text__button">
          {" "}
          <ContainedButton button_text={button_text} />
        </div>
        <div className="product-section_text__descr"></div>
      </div>
    </div>
  );
};
export default ProductSection;
