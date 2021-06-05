import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SearchInput from "../search-input";
import styles from "./header.module.css";

const Header = ({ totalItems }) => {
  const [toggleState, setToggleState] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };
  return (
    <Fragment>
      <section className={styles.menu_mobile_main}>
        <a
          onClick={() => setToggleState(!toggleState)}
          className={`${styles.menu_link} ${styles.hidden_menu__mobile} ${
            toggleState ? `` : `${styles.menu_link_active}`
          } `}
          href="#menu-mobile"
        >
          <span></span>
        </a>

        <div
          onClick={() => setToggleState(!toggleState)}
          className={`${styles.menu_mobile} ${
            toggleState ? `` : `${styles.menu_mobile_active}`
          }`}
        >
          <ul>
            <li>
              <Link
                to="/"
                onClick={scrollToTop}
                className={styles.menu_mobile_link}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/models"
                onClick={scrollToTop}
                className={styles.menu_mobile_link}
              >
                MODELS
              </Link>
            </li>
            <li>
              <Link
                to="/insta-shop"
                onClick={scrollToTop}
                className={styles.menu_mobile_link}
              >
                {" "}
                SHOP
              </Link>{" "}
            </li>
            <li>
              <Link
                to="/catalogue"
                onClick={scrollToTop}
                className={styles.menu_mobile_link}
              >
                COLLECTIONS
              </Link>{" "}
            </li>
            <li>
              <Link
                to="/sign-up"
                onClick={scrollToTop}
                className={styles.menu_mobile_link}
              >
                {" "}
                SIGN IN
              </Link>
            </li>
            <li>
              <Link
                to="/bag"
                onClick={scrollToTop}
                className={styles.menu_mobile_link}
              >
                BAG
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                to="/customer-service"
                onClick={scrollToTop}
                className={styles.menu_mobile_link}
              >
                {" "}
                SERVICE
              </Link>{" "}
            </li>
          </ul>
        </div>
      </section>
      <div className="main_header__menu hidden-menu">
        <div className={styles.header}>
          <div className={styles.header_left}>
            <Link to="/models" className={styles.header_link}>
              MODELS
            </Link>
            <Link to="/insta-shop" className={styles.header_link}>
              SHOP
            </Link>

            <Link to="/catalogue" className={styles.header_link}>
              COLLECTIONS
            </Link>
          </div>

          <Link to="/" className={styles.logo}>
            <div> MODNIKKY</div>
          </Link>
          <div className={styles.header_right}>
            <Link to="/catalogue" className={styles.header_right__search}>
              <SearchInput />
            </Link>
            <Link to="/sign-up" className={styles.header_link}>
              SIGN IN
            </Link>

            <Link to="/bag" className={styles.header_link}>
              BAG ({totalItems})
            </Link>
          </div>
          <Link to="/catalogue" className={styles.header_link_mobile}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </Link>
          <Link to="/bag" className={styles.header_link_mobile}>
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = ({ orderTotal }) => {
  return {
    totalItems: orderTotal,
  };
};

export default connect(mapStateToProps)(Header);
