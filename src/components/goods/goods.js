import React, { useEffect } from "react";
import { connect } from "react-redux";
import { clothesLoaded } from "../../actions";
import GoodsItem from "../goods-item";
import { withModnikkyService } from "../hoc";
import "./goods.css";
const Goods = ({ clothes, modnikkyService, clothesLoaded }) => {
  useEffect(() => {
    const data = modnikkyService.getClothes();
    clothesLoaded(data);
  }, []);
  // const { modnikkyService } = this.props;
  // console.log(modnikkyService);
  return (
    <div>
      <div className="goods-item-container">
        {clothes.map((cloth) => {
          return <GoodsItem cloth={cloth} key={cloth.id} />;
        })}
      </div>
    </div>
  );
};
const mapStateToProps = ({ clothes }) => {
  return { clothes };
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
};
export default withModnikkyService()(
  connect(mapStateToProps, mapDispatchToProps)(Goods)
);
