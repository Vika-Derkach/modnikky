import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
const Header = ({ totalItems }) => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <a href=""> NEW ARRIVALS</a>

          <a href="">SHOP</a>

          <Link to="/catalogue">COLLECTIONS</Link>
        </div>
        <Link to="/" className={styles.logo} href="">
          MODNIKKY
        </Link>
        <div className={styles.header_right}>
          <input
            className={styles.header_right__search}
            type="text"
            placeholder="SEARCH"
          />

          <Link to="/sign-up">SIGN IN</Link>

          <Link to="/bag">BAG ({totalItems})</Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ orderTotal }) => {
  return {
    totalItems: orderTotal,
  };
};

export default connect(mapStateToProps)(Header);
