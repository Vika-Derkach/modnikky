import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { searchClothes } from "../../actions";
import styles from "./header.module.css";

const Header = ({ totalItems, searchClothes, searchValue, myRef }) => {
  const [toggleState, setToggleState] = useState(true);

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
              <Link to="/" className={styles.menu_mobile_link}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/models" className={styles.menu_mobile_link}>
                MODELS
              </Link>
            </li>
            <li>
              <Link to="/insta-shop" className={styles.menu_mobile_link}>
                {" "}
                SHOP
              </Link>{" "}
            </li>
            <li>
              <Link to="/catalogue" className={styles.menu_mobile_link}>
                COLLECTIONS
              </Link>{" "}
            </li>
            <li>
              <Link to="/sign-up" className={styles.menu_mobile_link}>
                {" "}
                SIGN IN
              </Link>
            </li>
            <li>
              <Link to="/bag" className={styles.menu_mobile_link}>
                BAG
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/customer-service" className={styles.menu_mobile_link}>
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
          <Link to="/bag" className={styles.header_link_mobile}>
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </Fragment>
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
