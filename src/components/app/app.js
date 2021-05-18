import React from "react";
import { Route, Switch } from "react-router-dom";
import CatalogPage from "../catalog-page";
import ErrorBoundry from "../error-boundry";
import Footer from "../footer";
import Header from "../header";
import { withModnikkyService } from "../hoc";
import HomePage from "../home-page";
import Spinner from "../spinner";
const App = ({ modnikkyService }) => {
  // console.log(modnikkyService.getClothes());
  return (
    <div>
      <ErrorBoundry>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/catalogue" component={CatalogPage} />
          <Route render={() => <h2>Page is not found</h2>} />
        </Switch>

        <Spinner />
        <Footer />
      </ErrorBoundry>
    </div>
  );
};
export default withModnikkyService()(App);
