import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <a href=""> NEW ARRIVALS</a>

          <a href="">SHOP</a>

          <a href="">COLLECTIONS</a>
        </div>
        <div className={styles.logo} href="">
          MODNIKKY
        </div>
        <div className={styles.header_right}>
          <input
            className={styles.header_right__search}
            type="text"
            placeholder="SEARCH"
          />

          <a href="">SIGN IN</a>

          <a href="">BAG (2)</a>
        </div>
      </div>
    </div>
  );
};
export default Header;
