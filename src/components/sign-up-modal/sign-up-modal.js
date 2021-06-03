import React from "react";
import { Link } from "react-router-dom";
import ContainedButton from "../contained-button";
import "./sign-up-modal.css";

const SingUpModal = () => {
  const button_text = "SIGN UP";
  let classSignIn;
  let text;
  const sendedMassage = () => {
    classSignIn = " sign-visible";
    text = "You are signed up";
    return {
      classSignIn,
      text,
    };
  };

  return (
    <div className="overlay">
      <div className="popup">
        <div className="popup-title">CREATE ACCOUNT</div>

        <Link to="/" className="popup-close">
          {" "}
          &times;{" "}
        </Link>

        <div className="popup-form">
          <form
            // method="post"
            action="#"
            // enctype="multipart/form-data"
            // autocomplete="off"
            className="main-form"
          >
            <input
              type="text"
              placeholder="First Name"
              className="popup-form__input"
              id="name"
              name="name"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="popup-form__input"
              id="surname"
              name="surname"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="popup-form__input"
              id="email"
              name="email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="popup-form__input"
              id="pasword"
              name="pasword"
              required
            />
            <div className="popup-form__personal">
              <input type="checkbox" name="a" value="1680" />
              <p>
                Let's get personal! We'll send you only the good stuff:
                Exclusive early access to Sale, new arrivals and promotions. No
                nasties.
              </p>
            </div>
            <div className="popup-form__notification">
              By signing up you agree to{" "}
              <a href="https://policies.google.com/terms?hl=en-US">
                Terms of Service
              </a>{" "}
              and <a href="https://policies.google.com/">Privacy Policy</a>
            </div>
            <Link to="/" className="popup-form__button">
              <ContainedButton
                onAction={sendedMassage()}
                button_text={button_text}
              />
            </Link>
            <div className={`sign-text ${classSignIn}`}> {text} </div>
            <a
              href="https://support.google.com/accounts/answer/40560?hl=en"
              className="popup-form__account"
            >
              I HAVE AN ACCOUNT
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SingUpModal;
