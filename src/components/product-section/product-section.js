import React from "react";
import { connect } from "react-redux";
import { productAddedToBag } from "../../actions";
import ContainedButton from "../contained-button";
import { withModnikkyService } from "../hoc";
import ProductDescr from "../product-descr";
import "./product-section.css";

const ProductSection = ({ items, onAddedToBag, price, onItemSelected }) => {
  const button_text = "ADD TO BAG";

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
          size,
        } = item;
        return (
          <div key={id} className="product-section">
            <div className="product-section_picture">
              <img src={frontPicture} alt="front" />
            </div>
            <div className="product-section_picture">
              <img src={additionalPicture} alt="additional" />
            </div>
            <div className="product-section_text">
              <div className="product-section_text__title">{title}</div>
              <div className="product-section_text__price">USD ${price}</div>
              <div className="product-section_text__order">PRE-ORDER</div>
              <div className="product-section_text__color">COLOR: {color}</div>
              <div className="product-section_text__size">
                <div className="product-section_text__size__title">
                  SIZE: {size}
                </div>
                {/* <div className="size-button">
                  <SizeSelector />
                </div> */}
              </div>
              <div className="product-section_text__button">
                {" "}
                <ContainedButton
                  onAction={() => onAddedToBag(id)}
                  button_text={button_text}
                />
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
const mapStateToProps = ({ productItems }) => {
  return {
    items: productItems,
  };
};
const mapDispatchToProps = {
  onAddedToBag: (id) => productAddedToBag(id),
};

export default withModnikkyService()(
  connect(mapStateToProps, mapDispatchToProps)(ProductSection)
);
