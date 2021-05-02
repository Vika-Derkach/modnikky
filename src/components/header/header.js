import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <a href=""> NEW ARRIVALS</a>

        <a href="">SHOP</a>

        <a href="">COLLECTIONS</a>

        <a className={styles.logo} href="">
          MODNIKKY
        </a>

        <input type="text" placeholder="SEARCH" />

        <a href="">SIGN IN</a>

        <a href="">BAG (2)</a>
      </div>
    </div>
  );
};
export default Header;
