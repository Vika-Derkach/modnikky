import React from "react";
import "./contained-button.css";
const ContainedButton = ({ button_text, onAction, buttonLinkTo }) => {
  return (
    <div>
      <button onClick={onAction} className="button">
        {button_text}
      </button>
    </div>
  );
};
export default ContainedButton;
