import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app";
import ErrorBounry from "./components/error-boundry";
import { ModnikkyServiceProvider } from "./components/mondnikky-service-context";
import ModnikkyService from "./services/modnikky-service";
import store from "./store";

const modnikkyService = new ModnikkyService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBounry>
      <ModnikkyServiceProvider value={modnikkyService}>
        <Router>
          <App />
        </Router>
      </ModnikkyServiceProvider>
    </ErrorBounry>
  </Provider>,
  document.getElementById("root")
);
