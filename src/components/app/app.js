import React from "react";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import Header from "../header";
import Spinner from "../spinner";
const App = () => {
  return (
    <div>
      <ErrorBoundry>
        <Header />
        <ErrorIndicator />
        <Spinner />
      </ErrorBoundry>
    </div>
  );
};
export default App;
