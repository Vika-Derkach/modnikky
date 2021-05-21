import React from "react";
import { connect } from "react-redux";
import ContainedButton from "../contained-button";
import ProductDescr from "../product-descr";
import SizeSelector from "../size-selector";
import "./product-section.css";

const ProductSection = ({ items, price, onItemSelected }) => {
  const button_text = "ADD TO BAG";
  // const {id, title, frontPicture} = items;

  return (
    <div>
      {items.map((item, idx) => {
        const {
          id,
          frontPicture,
          title,
          additionalPicture,
          fabric,
          product_descr,
          price,
          color,
        } = item;
        return (
          <div key={id} className="product-section">
            <div className="product-section_picture">
              <img src={frontPicture} alt="" />
              {/* "https://i.pinimg.com/736x/05/da/14/05da143bb08929bc209598c319ec2ce2.jpg" */}
            </div>
            <div className="product-section_picture">
              {/* <img
                src="https://i.pinimg.com/originals/24/11/72/2411729f35288ffa12641f60980a1f49.jpg"
                alt=""
              /> */}
              <img src={additionalPicture} alt="" />
            </div>
            <div className="product-section_text">
              <div className="product-section_text__title">{title}</div>
              <div className="product-section_text__price">USD ${price}</div>
              <div className="product-section_text__order">PRE-ORDER</div>
              <div className="product-section_text__color">COLOR: {color}</div>
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
              <div className="product-section_text__descr">
                <ProductDescr product_descr={product_descr} fabric={fabric} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = ({ productItem }) => {
  return {
    items: productItem,
  };
};
// const mapDispatchToProps
export default connect(mapStateToProps)(ProductSection);
