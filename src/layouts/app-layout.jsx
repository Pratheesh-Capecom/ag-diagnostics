import React from "react";
import { Switch, Route } from "react-router-dom";
import AppViews from "views/app";
import Header from "layouts/utility/header/Header";
import Footer from "layouts/utility/footer/Footer";


export const AppLayout = () => {
  return (
    <div className="ag-app">
      <Header />
      <Switch>
        <Route path="" component={AppViews} />
      </Switch>
      <Footer />
    </div>
  );
};

export default AppLayout;
