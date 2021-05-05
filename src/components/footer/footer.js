import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <div className="footer-text__title">SIGN UP FOR UPDATES</div>
        <div className="footer-text__desc">
          Sign up for exclusive early sale access and tailored new arrivals.
        </div>
        <div className="footer-text__form">
          <input
            type="email"
            className="footer-text__form_input"
            placeholder="Your email address"
          ></input>
          <button className="footer-text__form_button">JOIN</button>
        </div>
      </div>
      <div className="footer-col">
        <div className="footer-service">
          <div className="footer__title">CUSTOMER SERVICE</div>{" "}
          <a href="">CONTACT</a>
          <a href="">TRACK ORDER</a>
          <a href="">DELIVERY & RETURNS</a>
          <a href="">PAYMENT</a>
          <a href="">PAYMENT</a>
          <a href="">FAQ</a>
        </div>
        <div className="footer-info">
          <div className="footer__title">INFO</div>
          <a href="">GIFT VOUCHERS</a>
          <a href="">SIZE GUIDE</a>
          <a href="">CAREERS AT MODNIKKY</a>
          <a href="">ABOUT US</a>
          <a href="">LEGAL POLICIES</a>
        </div>
        <div className="footer-follow">
          <div className="footer__title">FOLLOW US</div>

          <div className="footer-info__network">
            <a href="">
              {" "}
              <i class="fa fa-facebook-square" aria-hidden="true"></i> FACEBOOK
            </a>
          </div>
          <div className="footer-info__network">
            <a href="">
              {" "}
              <i class="fa fa-twitter" aria-hidden="true"></i> TWITTER
            </a>
          </div>
          <div className="footer-info__network">
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i> INSTAGRAM
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer__title">CONTACT US</div>
          <a href="queenviktoriyphp@gmail.com">hello@modnikky.com</a>
          <a href="">+380974422337</a>
          <a href="">
            Visit us at Kurbasa 7, <br /> Ternopil, Ukraine
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
