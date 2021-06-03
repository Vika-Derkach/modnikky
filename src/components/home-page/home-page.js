import React from "react";
import CatalogPic from "../catalog-pic";
import InstaShop from "../insta-shop";
import NewArrivals from "../new-arrivals";
import ScreenPic from "../screen-pic";
import "./home-page.css";
import pic_dress from "./img/pic-dress.jpg";
import pic_short from "./img/pic-short.jpg";
import pic_suit from "./img/pic-suit.jpg";
import sweater1 from "./img/sweater1.jpg";
import sweater2 from "./img/sweater2.jpg";
import sweater3 from "./img/sweater3.jpg";
import sweater4 from "./img/sweater4.jpg";

const HomePage = () => {
  const screen_pic1 = " screen_pic1";
  const title_1 = "NEW COLLECTION";
  const descr1 =
    "     Our easiest chuck-on-and-go staples come with a serious style heritage that’s liberating, sexy, comfy and supremely cool.";
  const button1 = "SHOP NEW ARRIVALS";

  const screen_pic2 = " screen_pic2";
  const title_2 = "VINTAGE INSPIRED";
  const descr2 =
    "     Inspired by the ‘70s and 80’s), we know that if you sift through our vintage inspired collection you’re gonna rock the perfect silhouette. ";
  const button2 = "SHOP NOW";

  const screen_pic3 = " screen_pic3";
  const title_3 = "SUSTAINABLE DENIM";
  const descr3 =
    "     What started as a true ‘80s vintage pair of jeans, finished as a re-energised, wider leg vintage jean with versatile detailing.  ";
  const button3 = "SHOP DENIM";

  const screen_pic4 = " screen_pic4";
  const title_4 = "PRAY FOR ROCK";
  const descr4 =
    " Beloved and forever relevant, there’s a convenience factor in a well-built pair of all-in-ones. ";
  const button4 = "CUSTOMER SERVICE";
  return (
    <div>
      <ScreenPic
        screen_pic={screen_pic1}
        title={title_1}
        descr={descr1}
        button={button1}
        buttonLink="/catalogue"
      />
      <ScreenPic
        screen_pic={screen_pic2}
        title={title_2}
        descr={descr2}
        button={button2}
        buttonLink="/insta-shop"
      />
      <CatalogPic
        pic_catal1={pic_dress}
        pic_catal2={pic_short}
        pic_catal3={pic_suit}
      />
      <ScreenPic
        screen_pic={screen_pic3}
        title={title_3}
        descr={descr3}
        button={button3}
        buttonLink="/catalogue"
      />

      <NewArrivals
        arr_title="NEW ARRIVALS"
        arr_pic1={sweater1}
        arr_pic2={sweater2}
        arr_pic3={sweater3}
        arr_pic4={sweater4}
      />
      <ScreenPic
        screen_pic={screen_pic4}
        title={title_4}
        descr={descr4}
        button={button4}
        buttonLink="/customer-service"
      />
      <InstaShop />
    </div>
  );
};
export default HomePage;
