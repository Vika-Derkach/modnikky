import React from "react";
import "./contained-button.css";
const ContainedButton = ({ button_text, onAction }) => {
  return (
    <div>
      <button onClick={onAction} className="button">
        {button_text}
      </button>
    </div>
  );
};
export default ContainedButton;
