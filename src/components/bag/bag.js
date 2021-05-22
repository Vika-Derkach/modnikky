import React from "react";
import { connect } from "react-redux";
import { productRemovedFromBag } from "../../actions";
import BagItem from "../bag-item";
import ContainedButton from "../contained-button";
import { withModnikkyService } from "../hoc";
import "./bag.css";
const Bag = ({ products, total, onDelete }) => {
  const button_text_checkout = "PROCEED TO CHECKOUT";
  return (
    <div className="bag">
      <div className="bag-header">
        BAG <span>2 items</span>{" "}
      </div>
      {products.map((product, idx) => {
        return (
          <BagItem
            onDelete={() => onDelete(product.id)}
            product={product}
            key={product.id}
          />
        );
      })}
      <div className="payment">
        {" "}
        <div className="bag-total">Total USD ${total}</div>
        <ContainedButton button_text={button_text_checkout} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ bagItems, orderTotal }) => {
  return {
    products: bagItems,
    total: orderTotal,
  };
};
const mapDispatchToProps = {
  // onDelete: (id) => onDelete(id)
  onDelete: productRemovedFromBag,
};
export default withModnikkyService()(
  connect(mapStateToProps, mapDispatchToProps)(Bag)
);
