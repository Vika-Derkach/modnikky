import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchClothes, onItemSelected, searchClothes } from "../../actions";
import ErrorIndicator from "../error-indicator";
import GoodsItem from "../goods-item";
import { withModnikkyService } from "../hoc";
import Spinner from "../spinner";
import "./goods.css";
const Goods = ({
  clothes,
  loading,
  error,

  onItemSelected,
  fetchClothes,
}) => {
  useEffect(() => {
    fetchClothes();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <div className="goods-item-container">
        {clothes.map((cloth) => {
          return (
            <GoodsItem
              cloth={cloth}
              key={cloth.id}
              onItemSelected={() => onItemSelected(cloth.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = ({ clothes, loading, error }) => {
  return { clothes, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { modnikkyService } = ownProps;
  return {
    fetchClothes: fetchClothes(modnikkyService, dispatch),
    onItemSelected: (id) => dispatch(onItemSelected(id)),
    ///search fillter
    searchClothes: searchClothes,
  };
};
export default withModnikkyService()(
  connect(mapStateToProps, mapDispatchToProps)(Goods)
);
