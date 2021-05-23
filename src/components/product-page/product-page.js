import React from "react";
import { connect } from "react-redux";
import CompleteLook from "../complete-look";
import { withModnikkyService } from "../hoc";
import NewArrivals from "../new-arrivals";
import ProductSection from "../product-section";
import "./product-page.css";

const ProductPage = ({ clothes }) => {
  // const { kind, frontPicture } = clothes;

  // useEffect(() => {

  //   modnikkyService
  //     .getClothes()
  //     .then((data) => clothesLoaded(data));

  // }, []);
  ///mathrandom service image
  const sweater1 =
    "https://www.na-kd.com/globalassets/nakd_destroyed_detail_high_waist_staight_jeans_1018-006823-0116_01c-1.jpg?ref=09FAA58D86";
  const sweater2 =
    "https://minnim.ua/image/catalog/wjml_bosonozhki/dzhinsy-mom-jeans-light-1.jpg";
  const sweater3 =
    "https://i.pinimg.com/474x/28/7e/bb/287ebbb9a33265ab8915b0ffd50f7fd7.jpg";
  const sweater4 =
    "https://media.boohoo.com/i/boohoo/dzz11660_mid%2520blue_xl?pdp.template";

  return (
    <div className="product-page">
      <ProductSection />
      <CompleteLook />
      <NewArrivals
        arr_title="YOU MAY ALSO LIKE"
        arr_pic1={sweater1}
        arr_pic2={sweater2}
        arr_pic3={sweater3}
        arr_pic4={sweater4}
      />
    </div>
  );
};
const mapStateToProps = ({ clothes }) => {
  return { clothes };
};
export default withModnikkyService()(connect(mapStateToProps)(ProductPage));
