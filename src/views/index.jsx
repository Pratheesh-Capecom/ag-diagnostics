import React from "react";
import AppLayout from "layouts/app-layout";
import { Switch } from "react-router-dom";

export const Views = (props) => {
  const { location } = props;

  return (
    <Switch>
      <AppLayout location={location} />
    </Switch>
  );
};

export default Views;
