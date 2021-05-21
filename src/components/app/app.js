import React from "react";
import { Route, Switch } from "react-router-dom";
import Bag from "../bag";
import CatalogPage from "../catalog-page";
import ErrorBoundry from "../error-boundry";
import Footer from "../footer";
import Header from "../header";
import { withModnikkyService } from "../hoc";
import HomePage from "../home-page";
import ProductPage from "../product-page";
import SingUpModal from "../sign-up-modal";
const App = ({ modnikkyService }) => {
  // console.log(modnikkyService.getClothes());
  return (
    <div>
      <ErrorBoundry>
        <Header />
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
          <Route render={() => <h2>Page is not found</h2>} />
        </Switch>

        <Footer />
      </ErrorBoundry>
    </div>
  );
};
export default withModnikkyService()(App);
