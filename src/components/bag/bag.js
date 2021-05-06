import React from "react";
import BagItem from "../bag-item";
import ContainedButton from "../contained-button";
import "./bag.css";
const Bag = () => {
  const button_text_checkout = "PROCEED TO CHECKOUT";
  return (
    <div className="bag">
      <div className="bag-header">
        BAG <span>2 items</span>{" "}
      </div>

      <BagItem />
      <div className="payment">
        {" "}
        <div className="bag-total">Total USD $490.00</div>
        <ContainedButton button_text={button_text_checkout} />
      </div>
    </div>
  );
};
export default Bag;
