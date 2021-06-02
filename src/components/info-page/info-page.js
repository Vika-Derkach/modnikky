import React from "react";
import "./info-page.css";

const InfoPage = ({ info_text, info_title, info_img }) => {
  return (
    <div className="info">
      <h2 className="info-title">{info_title}</h2>
      <div className="info-text">{info_text}</div>
      <div className="info-img">
        <img src={info_img} alt="info-pic" />
      </div>
    </div>
  );
};
export default InfoPage;
