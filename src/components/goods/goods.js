import React, { useEffect } from "react";
import { connect } from "react-redux";
import { clothesLoaded, clothesRequested } from "../../actions";
import GoodsItem from "../goods-item";
import { withModnikkyService } from "../hoc";
import ProductPage from "../product-page";
import Spinner from "../spinner";
import "./goods.css";
const Goods = ({
  clothes,
  loading,
  modnikkyService,
  clothesLoaded,
  clothesRequested,
}) => {
  useEffect(() => {
    clothesRequested();
    modnikkyService.getClothes().then((data) => clothesLoaded(data));
  }, []);
  // const { modnikkyService } = this.props;
  // console.log(modnikkyService);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="goods-item-container">
        {clothes.map((cloth) => {
          return <GoodsItem cloth={cloth} key={cloth.id} />;
        })}
      </div>
      <ProductPage />
    </div>
  );
};
const mapStateToProps = ({ clothes, loading }) => {
  return { clothes, loading };
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
};
export default withModnikkyService()(
  connect(mapStateToProps, mapDispatchToProps)(Goods)
);
