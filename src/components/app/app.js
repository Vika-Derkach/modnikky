import React from "react";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import Footer from "../footer";
import Header from "../header";
import HomePage from "../home-page";
import Spinner from "../spinner";
const App = () => {
  return (
    <div>
      <ErrorBoundry>
        <Header />
        <HomePage />
        <ErrorIndicator />
        <Spinner />
        <Footer />
      </ErrorBoundry>
    </div>
  );
};
export default App;
