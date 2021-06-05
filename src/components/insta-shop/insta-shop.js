import React from "react";
import { Element } from "react-scroll";
import arr_pic5 from "./img/bikini.jpg";
import arr_pic2 from "./img/hoodie.jpg";
import arr_pic4 from "./img/jacket.jpg";
import arr_pic1 from "./img/jeans.jpg";
import arr_pic3 from "./img/jeans2.jpg";
import "./insta-shop.css";
const InstaShop = () => {
  return (
    <Element className="insta-shop" name="insta-shop">
      <div className="insta-shop__title">
        IMSTAGRAM{" "}
        <a href="https://instagram.com/midnight_custom?igshid=1auy6xgqfup8n">
          SHOP{" "}
        </a>{" "}
      </div>
      <div className="insta-shop-container">
        <div className="insta-shop_pic">
          {" "}
          <img src={arr_pic1} alt="" />
        </div>
        <div className="insta-shop_pic ">
          <div className="insta-shop_pic-container">
            <div className="insta-shop_pic__small">
              <img src={arr_pic2} alt="" />
            </div>
            <div className="insta-shop_pic__small">
              <img src={arr_pic3} alt="" />
            </div>
            <div className="insta-shop_pic__small">
              <img src={arr_pic4} alt="" />
            </div>
            <div className="insta-shop_pic__small">
              <img src={arr_pic5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default InstaShop;
