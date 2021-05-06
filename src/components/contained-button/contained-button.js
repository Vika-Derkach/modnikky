import React from "react";
import "./contained-button.css";
const ContainedButton = ({ button_text }) => {
  return (
    <div>
      <button className="button">{button_text}</button>
    </div>
  );
};
export default ContainedButton;
