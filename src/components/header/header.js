import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { bindActionCreators } from "redux";
import { onSearchChanges, searchClothes } from "../../actions";
import styles from "./header.module.css";

const Header = ({
  totalItems,
  searchClothes,
  searchValue,
  onSearchChanges,
}) => {
  ///
  const [term, setTerm] = useState("lue");
  const onSearchChange = (e) => {
    const term = e.target.value;
    setTerm({ term });
    // searchClothes(term);
    // search.onSearchChange(term);
  };

  // search.onSearchChange(term);
  console.log(searchClothes());
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <Link to="/" className={styles.header_link}>
            <ScrollLink
              activeClass="active"
              to="new_arrivals"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {" "}
              NEW ARRIVALS
            </ScrollLink>
          </Link>
          <Link to="/" className={styles.header_link}>
            <ScrollLink
              activeClass="active"
              to="insta-shop"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              SHOP
            </ScrollLink>
          </Link>

          <Link to="/catalogue" className={styles.header_link}>
            COLLECTIONS
          </Link>
        </div>
        <Link to="/" className={styles.logo}>
          MODNIKKY
        </Link>
        <div className={styles.header_right}>
          <input
            className={styles.header_right__search}
            type="text"
            placeholder="SEARCH"
            value={searchValue}
            // onChange={onSearchChange}
            onChange={(e) => searchClothes(e.target.value)}
          />

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
const mapStateToProps = ({ orderTotal, searchClothes, clothes }) => {
  return {
    totalItems: orderTotal,
    // searchValue: clothes.value,
    searchValue: searchClothes,
  };
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchClothes, onSearchChanges }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
