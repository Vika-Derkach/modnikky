import React from "react";
import { connect } from "react-redux";
import CompleteLook from "../complete-look";
import { withModnikkyService } from "../hoc";
import NewArrivals from "../new-arrivals";
import ProductSection from "../product-section";
import "./product-page.css";

const ProductPage = ({ clothes, lookPicture, lookPictureSecond }) => {
  const sweater1 =
    "https://cdn-hoy.gant.com/public/serve/415482/w_300,q_80/20210211101222-202101-432681-662-model-fv-1-432681-662-model-fv.jpg";

  const sweater2 =
    "https://media.boohoo.com/i/boohoo/dzz11660_mid%2520blue_xl?pdp.template";
  const sweater3 =
    "https://www.baumundpferdgarten.com/pub/media/catalog/product/cache/095503e0f0c3da5a2ee8f403ce3f1fc3/5/1/5142849_21481_8148_Packback_1.jpg";
  const sweater4 =
    "https://cdn.shopify.com/s/files/1/0285/9001/4596/products/1003075_CASCADE_MAXI_DRESS_COPPER_PHOEBE_3_1150x.jpg?v=1615933275";

  return (
    <div className="product-page">
      <ProductSection />
      <CompleteLook
        lookPicture={lookPicture}
        lookPictureSecond={lookPictureSecond}
      />
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
const mapStateToProps = ({ clothes, lookPicture, lookPictureSecond }) => {
  return { clothes, lookPicture, lookPictureSecond };
};
export default withModnikkyService()(connect(mapStateToProps)(ProductPage));
