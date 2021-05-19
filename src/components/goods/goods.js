import React, { useEffect } from "react";
import { connect } from "react-redux";
import { clothesError, clothesLoaded, clothesRequested } from "../../actions";
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
}) => {
  useEffect(() => {
    clothesRequested();
    modnikkyService
      .getClothes()
      .then((data) => clothesLoaded(data))
      .catch((err) => clothesError(err));
  }, []);
  // const { modnikkyService } = this.props;
  // console.log(modnikkyService);
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     clothesLoaded: (newClothes) => {
//       dispatch({
//         type: "CLOTHES_LOADED",
//         payload: newClothes,
//       });
//     },
//   };
// };
const mapDispatchToProps = {
  clothesLoaded: clothesLoaded,
  clothesRequested: clothesRequested,
  clothesError: clothesError,
  onItemSelected: (id) => {
    console.log("item selected", id);
  },
};
export default withModnikkyService()(
  connect(mapStateToProps, mapDispatchToProps)(Goods)
);
