import React from "react";
import "./new-arrivals.css";
const NewArrivals = ({ arr_title, arr_pic1, arr_pic2, arr_pic3, arr_pic4 }) => {
  return (
    <div className="arrivals">
      <div className="arrivals__title">{arr_title}</div>
      <div className="arrivals-container">
        <div className="arrivals-picture">
          <img src={arr_pic1} alt="" />
        </div>
        <div className="arrivals-picture">
          <img src={arr_pic2} alt="" />
        </div>
        <div className="arrivals-picture">
          <img src={arr_pic3} alt="" />
        </div>
        <div className="arrivals-picture">
          <img src={arr_pic4} alt="" />
        </div>
      </div>
    </div>
  );
};
export default NewArrivals;
