import React, { useEffect } from "react";
import { connect } from "react-redux";
import GoodsItem from "../goods-item";
import { withModnikkyService } from "../hoc";
import "./goods.css";
const Goods = ({ clothes, modnikkyService }) => {
  useEffect(() => {
    const data = modnikkyService.getClothes();
    console.log(data);
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
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default withModnikkyService()(connect(mapStateToProps)(Goods));
