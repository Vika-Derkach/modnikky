import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./footer.css";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

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
        <Link onClick={scrollToTop} to="/customer-service">
          <div className="footer-service">
            <div className="footer__title">CUSTOMER SERVICE</div>{" "}
            <a href="">CONTACT</a>
            <a href="">TRACK ORDER</a>
            <Link to="/customer-service">
              {" "}
              <ScrollLink
                activeClass="active"
                to="our_delivery"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                DELIVERY & RETURNS
              </ScrollLink>
            </Link>
            <a href="">PAYMENT</a>
            <a href="">PAYMENT</a>
            <a href="">FAQ</a>
          </div>
        </Link>

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
            <a href="https://www.facebook.com/profile.php?id=100017338952199">
              {" "}
              <i className="fa fa-facebook-square" aria-hidden="true"></i>{" "}
              FACEBOOK
            </a>
          </div>
          <div className="footer-info__network">
            <a href="https://twitter.com/?lang=ru">
              {" "}
              <i className="fa fa-twitter" aria-hidden="true"></i> TWITTER
            </a>
          </div>
          <div className="footer-info__network">
            <a href="https://www.instagram.com/_viki_der/?hl=ru">
              <i className="fa fa-instagram" aria-hidden="true"></i> INSTAGRAM
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer__title">CONTACT US</div>
          <a href="queenviktoriyphp@gmail.com">hello@modnikky.com</a>
          <a href="+380974422337">+380974422337</a>
          <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9B%D0%B5%D1%81%D1%8F+%D0%9A%D1%83%D1%80%D0%B1%D0%B0%D1%81%D0%B0,+7,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+46000/@49.5729275,25.6399427,17z/data=!3m1!4b1!4m5!3m4!1s0x473033d86567518f:0xfe678e9806a578da!8m2!3d49.5729275!4d25.6421314">
            Visit us at Kurbasa 7, <br /> Ternopil, Ukraine
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
