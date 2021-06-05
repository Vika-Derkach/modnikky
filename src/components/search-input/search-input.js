import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchClothes } from "../../actions";
import "./search-input.css";
const SearchInput = ({ searchClothes, searchValue }) => {
  return (
    <Fragment>
      <span className="input-loop">
        <i className="fa fa-search" aria-hidden="true"></i>
      </span>
      <input
        type="text"
        className="search-input"
        placeholder="SEARCH"
        value={searchValue}
        onChange={(e) => searchClothes(e.target.value)}
      />
    </Fragment>
  );
};
const mapStateToProps = ({ searchClothesValue }) => {
  return {
    ///search fillter
    searchValue: searchClothesValue,
  };
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchClothes }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
