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
        <form className="footer-text__form">
          <input
            type="email"
            className="footer-text__form_input"
            placeholder="Your email address"
          ></input>
          <button className="footer-text__form_button">JOIN</button>
        </form>
      </div>
      <div className="footer-col">
        <div className="footer-service">
          <Link
            onClick={scrollToTop}
            to="/customer-service"
            className="footer__link"
          >
            <div className="footer__title">CUSTOMER SERVICE</div>{" "}
          </Link>
          <Link
            onClick={scrollToTop}
            to="/black-Friday"
            className="footer__link"
          >
            BLACK FRIDAY
          </Link>
          <Link to="/customer-service" className="footer__link">
            {" "}
            <ScrollLink
              activeClass="active"
              to="our_order"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              // className="footer__link"
            >
              TRACK ORDER
            </ScrollLink>
          </Link>

          <Link to="/customer-service" className="footer__link">
            {" "}
            <ScrollLink
              activeClass="active"
              to="our_delivery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              DELIVERY
            </ScrollLink>
          </Link>
          <Link to="/customer-service" className="footer__link">
            <ScrollLink
              activeClass="active"
              to="our_payment"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PAYMENT
            </ScrollLink>
          </Link>
          <Link to="/customer-service" className="footer__link">
            <ScrollLink
              activeClass="active"
              to="our_refund"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {" "}
              RETURNS & REFUNDS{" "}
            </ScrollLink>
          </Link>
        </div>

        <div className="footer-info">
          <div className="footer__title">INFO</div>
          <Link to="/culture" onClick={scrollToTop} className="footer__link">
            CULTURE
          </Link>
          <Link to="/size-guide" onClick={scrollToTop} className="footer__link">
            SIZE GUIDE
          </Link>
          <Link to="/career" onClick={scrollToTop} className="footer__link">
            CAREERS AT MODNIKKY
          </Link>
          <Link to="/about-us" onClick={scrollToTop} className="footer__link">
            ABOUT US
          </Link>
          <Link to="/customer-service" className="footer__link">
            <ScrollLink
              activeClass="active"
              to="our_products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              LEGAL POLICIES
            </ScrollLink>
          </Link>
        </div>
        <div className="footer-follow">
          <div className="footer__title">FOLLOW US</div>

          <div className="footer-info__network">
            <a
              href="https://www.facebook.com/profile.php?id=100017338952199"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fa fa-facebook-square" aria-hidden="true"></i>{" "}
              FACEBOOK
            </a>
          </div>
          <div className="footer-info__network">
            <a
              href="https://twitter.com/?lang=ru"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fa fa-twitter" aria-hidden="true"></i> TWITTER
            </a>
          </div>
          <div className="footer-info__network">
            <a
              href="https://www.instagram.com/_viki_der/?hl=ru"
              target="_blank"
              className="footer__link"
              rel="noreferrer"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i> INSTAGRAM
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer__title">CONTACT US</div>
          <a href="mailto:queenviktoriyphp@gmail.com" className="footer__link">
            hello@modnikky.com
          </a>
          <a href="tel:+380974422337" className="footer__link">
            +380974422337
          </a>
          <a
            className="footer__link"
            target="_blank"
            href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9B%D0%B5%D1%81%D1%8F+%D0%9A%D1%83%D1%80%D0%B1%D0%B0%D1%81%D0%B0,+7,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+46000/@49.5729275,25.6399427,17z/data=!3m1!4b1!4m5!3m4!1s0x473033d86567518f:0xfe678e9806a578da!8m2!3d49.5729275!4d25.6421314"
            rel="noreferrer"
          >
            Visit us at Kurbasa 7, <br /> Ternopil, Ukraine
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
