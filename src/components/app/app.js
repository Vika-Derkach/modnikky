import React from "react";
import CustomerServicePage from "../customer-service-page";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import Footer from "../footer";
import Header from "../header";
import { withModnikkyService } from "../hoc";
import SingUpModal from "../sign-up-modal";
import Spinner from "../spinner";
const App = ({ modnikkyService }) => {
  console.log(modnikkyService.getClothes());
  return (
    <div>
      <ErrorBoundry>
        <Header />
        <CustomerServicePage />
        <SingUpModal />
        <ErrorIndicator />
        <Spinner />
        <Footer />
      </ErrorBoundry>
    </div>
  );
};
export default withModnikkyService()(App);
