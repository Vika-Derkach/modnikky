import React from "react";
import { connect } from "react-redux";
import { productAllRemovedFromBag, productRemovedFromBag } from "../../actions";
import BagItem from "../bag-item";
import ContainedButton from "../contained-button";
import { withModnikkyService } from "../hoc";
import "./bag.css";
const Bag = ({ products, totalPrice, onDelete, totalItems, onDecrease }) => {
  const button_text_checkout = "PROCEED TO CHECKOUT";
  return (
    <div className="bag">
      <div className="bag-header">
        BAG <span>{totalItems} items</span>{" "}
      </div>
      {products.map((product, idx) => {
        return (
          <BagItem
            onDelete={() => onDelete(product.id)}
            onDecrease={() => onDecrease(product.id)}
            product={product}
            key={product.id}
          />
        );
      })}
      <div className="payment">
        {" "}
        <div className="bag-total">Total USD ${totalPrice}</div>
        <ContainedButton button_text={button_text_checkout} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ bagItems, orderTotal, orderTotalPrice }) => {
  return {
    products: bagItems,
    totalItems: orderTotal,
    totalPrice: orderTotalPrice,
  };
};
const mapDispatchToProps = {
  onDecrease: productRemovedFromBag,
  onDelete: productAllRemovedFromBag,
};
export default withModnikkyService()(
  connect(mapStateToProps, mapDispatchToProps)(Bag)
);
