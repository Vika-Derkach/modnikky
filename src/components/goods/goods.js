import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  clothesError,
  clothesLoaded,
  clothesRequested,
  onItemSelected,
  searchClothes,
} from "../../actions";
import ErrorIndicator from "../error-indicator";
import GoodsItem from "../goods-item";
import { withModnikkyService } from "../hoc";
import Spinner from "../spinner";
import "./goods.css";
const Goods = ({
  clothes,
  loading,
  error,
  modnikkyService,
  clothesLoaded,
  clothesRequested,
  clothesError,
  onItemSelected,
  searchClothes,
}) => {
  useEffect(() => {
    clothesRequested();
    modnikkyService
      .getClothes()
      .then((data) => clothesLoaded(data))
      .catch((err) => clothesError(err));
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorIndicator />;
  }
  console.log(searchClothes);

  return (
    <div>
      <div className="goods-item-container">
        {clothes.map((cloth) => {
          console.log(cloth.title);
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

const mapDispatchToProps = {
  clothesLoaded: clothesLoaded,
  clothesRequested: clothesRequested,
  clothesError: clothesError,
  onItemSelected: (id) => onItemSelected(id),
  searchClothes: () => searchClothes(),
};
export default withModnikkyService()(
  connect(mapStateToProps, mapDispatchToProps)(Goods)
);
