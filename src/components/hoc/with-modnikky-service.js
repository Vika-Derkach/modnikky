import React from "react";
import { ModnikkyServiceConsumer } from "../mondnikky-service-context";
const withModnikkyService = () => (Wrapped) => {
  return (props) => {
    return (
      <ModnikkyServiceConsumer>
        {(modnikkyService) => {
          return <Wrapped {...props} modnikkyService={modnikkyService} />;
        }}
      </ModnikkyServiceConsumer>
    );
  };
};
export default withModnikkyService;
