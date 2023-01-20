import React from "react";
import AppLayout from "layouts/app-layout";
import { Switch, HashRouter as Route } from "react-router-dom";

export const Views = (props) => {
  const { location } = props;

  return (
    <Switch>
      <Route exact path="">
        <AppLayout location={location} />
      </Route>
    </Switch>
  );
};

export default Views;
