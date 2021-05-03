import React from "react";
import "./screen-pic.css";

const ScreenPic = ({ screen_pic, title, descr, button }) => {
  return (
    <div className={screen_pic}>
      <div className="main-text">
        <div className="main-text__title"> {title}</div>
        <div className="main-text__descr">{descr}</div>
        <button className="main-text__button">{button}</button>
      </div>
    </div>
  );
};
export default ScreenPic;
