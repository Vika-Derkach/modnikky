import React from "react";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
const App = () => {
  return (
    <div>
      <ErrorBoundry>
        <ErrorIndicator />
        <Spinner />
      </ErrorBoundry>
    </div>
  );
};
export default App;
