import React from "react";
import { Route, Switch } from "react-router-dom";
import Bag from "../bag";
import CatalogPage from "../catalog-page";
import CustomerServicePage from "../customer-service-page";
import ErrorBoundry from "../error-boundry";
import Footer from "../footer";
import Header from "../header";
import { withModnikkyService } from "../hoc";
import HomePage from "../home-page";
import InfoPage from "../info-page";
import InstaShop from "../insta-shop";
import NewArrivals from "../new-arrivals";
import ProductPage from "../product-page";
import ScrollTopArrow from "../scroll-top-arrow";
import SingUpModal from "../sign-up-modal";
import "./app.css";
const App = ({ modnikkyService }) => {
  const info_title_about = "Who we are";
  const info_text_about =
    "We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.";
  const info_img_about =
    "https://wearethecity.com/wp-content/uploads/2018/07/man-3365368_640.jpg";
  const info_title_career = "Come build the future with us";
  const info_img_career =
    "https://journeywithladymaya.files.wordpress.com/2020/08/unity.jpg";
  const info_text_career =
    "Our mission is to be Earths most customer-centric company. This is what unites Modnikki across teams and geographies as we are all striving to delight our customers and make their lives easier, one innovative product, service, and idea at a time.";
  const info_text_culture =
    "We are a company of builders who bring varying backgrounds, ideas, and points of view to inventing on behalf of our customers. Our diverse perspectives come from many sources including gender, race, age, national origin, sexual orientation, culture, education, and professional and life experience. We are committed to diversity and inclusion and always look for ways to scale our impact as we grow.";
  const info_title_culture = "Building an inclusive culture";
  const info_img_culture =
    "http://media.bizj.us/view/img/10110236/howtowhatiscorporateculture*1200xx2512-1413-0-272.jpg";
  const info_title_blackFriday = "BLACK FRIDAY";
  const info_text_blackFriday =
    "It looks like you’ve missed our biggest deal ever and, we’re not going to lie, it really was amazing. But, there’s plenty more to look out for from right now until Black Friday 2021! There is new styles every day from more than 850 of the biggest brands in the world. For a sneak peek at some of the best, head to the New-In edits below. Plus, for discounts all year round, head to the Outlet. You won’t be disappointed.";
  const info_img_blackFriday =
    "https://i2-prod.mirror.co.uk/incoming/article7527164.ece/ALTERNATES/s615/High-Street-shopping.jpg";
  return (
    <div>
      <ErrorBoundry>
        <Header />
        <ScrollTopArrow />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/catalogue" component={CatalogPage} />
          <Route path="/product" exact component={ProductPage} />
          <Route
            path="/product/:id"
            render={({ match }) => {
              const { id } = match.params;

              return <ProductPage itemId={id} />;
            }}
          />
          <Route path="/bag" component={Bag} />
          <Route path="/sign-up" component={SingUpModal} />
          <Route path="/customer-service" component={CustomerServicePage} />
          <Route path="/new-arrivals" component={NewArrivals} />
          <Route path="/insta-shop" component={InstaShop} />
          <Route
            path="/black-Friday"
            render={() => (
              <InfoPage
                info_text={info_text_blackFriday}
                info_title={info_title_blackFriday}
                info_img={info_img_blackFriday}
              />
            )}
          />

          <Route
            path="/culture"
            render={() => (
              <InfoPage
                info_text={info_text_culture}
                info_title={info_title_culture}
                info_img={info_img_culture}
              />
            )}
          />
          <Route
            path="/career"
            render={() => (
              <InfoPage
                info_text={info_text_career}
                info_title={info_title_career}
                info_img={info_img_career}
              />
            )}
          />
          <Route
            path="/about-us"
            render={() => (
              <InfoPage
                info_text={info_text_about}
                info_title={info_title_about}
                info_img={info_img_about}
              />
            )}
          />
          <Route
            path="/size-guide"
            render={() => (
              <div className="size-page">
                <img
                  src="https://mmswua.com/image/catalog/gid.jpg"
                  alt="size"
                />{" "}
              </div>
            )}
          />

          <Route
            render={() => (
              <div className="mistake-page">
                <img
                  src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=600&name=shutterstock_774749455.jpg"
                  alt="404"
                />{" "}
              </div>
            )}
          />
        </Switch>

        <Footer />
      </ErrorBoundry>
    </div>
  );
};
export default withModnikkyService()(App);
