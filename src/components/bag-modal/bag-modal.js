import React from "react";
import ContainedButton from "../contained-button";
import "./bag-modal.css";
const BagModal = () => {
  const button_text = "CHECKOUT";

  return (
    <div className="bag-modal-overlay">
      <div className="bag-modal-popup">
        <div className="bag-modal-popup-text">
          <div className="bag-modal-popup-text__bag">BAG (2)</div>
          <div className="bag-popup-close"> &times; </div>
          <div className="bag-modal-popup-text__total">TOTAL: USD $590.00</div>

          <button className="bag-modal-popup-text__button">VIEWBAG</button>
          <ContainedButton button_text={button_text} />
        </div>
        <div className="bag-modal-popup__picture">
          <img
            src="https://www.reserved.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/Y/K/YK182-00X-001_11.jpg"
            alt=""
          />
          <div className="bag-modal-popup__picture-text">
            <div className="bag-modal-popup__picture-text__name">
              VICTORIOUS SPILT BACK TOP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BagModal;
