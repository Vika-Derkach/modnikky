import React from "react";
import CatalogPage from "../catalog-page";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import Footer from "../footer";
import Header from "../header";
import Spinner from "../spinner";
const App = () => {
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
export default App;
