import React from "react";
import AppLayout from "layouts/app-layout";
import { BrowserRouter } from "react-router-dom";

export const Views = (props) => {
  const { location } = props;

  return (
    <BrowserRouter exact path="/">
      <AppLayout location={location} />
    </BrowserRouter>
  );
};

export default Views;
