import React from "react";
import CatalogPage from "../catalog-page";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import Footer from "../footer";
import Header from "../header";
import { withModnikkyService } from "../hoc";
import Spinner from "../spinner";
const App = ({ modnikkyService }) => {
  console.log(modnikkyService.getClothes());
  return (
    <div>
      <ErrorBoundry>
        <Header />

        <CatalogPage />
        <ErrorIndicator />
        <Spinner />
        <Footer />
      </ErrorBoundry>
    </div>
  );
};
export default withModnikkyService()(App);