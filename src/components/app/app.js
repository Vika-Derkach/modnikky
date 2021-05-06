import React from "react";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import Footer from "../footer";
import Header from "../header";
import { withModnikkyService } from "../hoc";
import ProductPage from "../product-page";
import Spinner from "../spinner";
const App = ({ modnikkyService }) => {
  console.log(modnikkyService.getClothes());
  return (
    <div>
      <ErrorBoundry>
        <Header />
        <ProductPage />

        <ErrorIndicator />
        <Spinner />
        <Footer />
      </ErrorBoundry>
    </div>
  );
};
export default withModnikkyService()(App);
