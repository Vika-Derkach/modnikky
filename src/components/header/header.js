import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { searchClothes } from "../../actions";
import styles from "./header.module.css";

const Header = ({ totalItems, searchClothes, searchValue, myRef }) => {
  return (
    <div>
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
          MODNIKKY
        </Link>
        <div className={styles.header_right}>
          {/* search fillter */}
          <Link to="/catalogue">
            <input
              className={styles.header_right__search}
              type="text"
              placeholder="SEARCH"
              value={searchValue}
              onChange={(e) => searchClothes(e.target.value)}
            />
          </Link>
          <Link to="/sign-up" className={styles.header_link}>
            SIGN IN
          </Link>

          <Link to="/bag" className={styles.header_link}>
            BAG ({totalItems})
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ orderTotal, searchClothesValue, clothes }) => {
  return {
    totalItems: orderTotal,
    ///search fillter
    searchValue: searchClothesValue,
  };
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchClothes }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
