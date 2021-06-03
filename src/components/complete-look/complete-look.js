import React from "react";
import "./complete-look.css";
const CompleteLook = ({ lookPicture, lookPictureSecond }) => {
  return (
    <div>
      <div className="complete-look-container">
        <div className="complete-look-picture complete-look-picture__text">
          Complete <br /> the look
        </div>
        <div className="complete-look-picture">
          {/* <img
            src="https://i.pinimg.com/originals/fe/4c/39/fe4c390eee3db16ce43dabd1ae97ab99.jpg"
            alt=""
          /> */}
          <img src={lookPicture} alt="" />
        </div>
        <div className="complete-look-picture">
          {/* <img
            src="https://i.pinimg.com/originals/be/06/15/be0615c80c8fc0d7b3844d1e74885dbc.png"
            alt=""
          /> */}
          <img src={lookPictureSecond} alt="" />
        </div>
      </div>
    </div>
  );
};
export default CompleteLook;
