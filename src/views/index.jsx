import React from "react";
import AppLayout from "layouts/app-layout";
import { Switch, BrowserRouter } from "react-router-dom";

export const Views = (props) => {
  const { location } = props;

  return (
    <Switch>
      <BrowserRouter exact path="">
        <AppLayout location={location} />
      </BrowserRouter>
    </Switch>
  );
};

export default Views;
