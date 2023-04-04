import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export const AppViews = () => {
  return (
    <Suspense fallback={""}>
      <Switch>
        <Route exact path="/" component={lazy(() => import(`./pages/home`))} />
        <Route exact path="/about-us/ag-diagnostics" component={lazy(() => import(`./pages/about-us/ag-diagnostics`))} />
        <Route exact path="/about-us/about-founder" component={lazy(() => import(`./pages/about-us/about-founder`))} />
        <Route exact path="/about-us/our-team" component={lazy(() => import(`./pages/about-us/our-team`))} />
        <Route exact path="/about-us/awards" component={lazy(() => import(`./pages/about-us/awards`))} />
        <Route exact path="/about-us/csr-policy" component={lazy(() => import(`./pages/about-us/csr-policy`))} />
        <Route exact path="/home-visit" component={lazy(() => import(`./pages/home-visit`))} />
        <Route exact path="/home-visit/:packagename/:id/:amount" component={lazy(() => import(`./pages/home-visit`))} />
        <Route exact path="/services" component={lazy(() => import(`./pages/services`))} />
        <Route exact path="/specialities" component={lazy(() => import(`./pages/specialities`))} />
        <Route exact path="/:cityName/packages" component={lazy(() => import(`./pages/packages`))} />
        <Route exact path="/find-a-lab" component={lazy(() => import(`./pages/find-a-lab`))} />
        <Route exact path="/brochures" component={lazy(() => import(`./pages/brochures`))} />
        <Route exact path="/privacy-policy" component={lazy(() => import(`./pages/privacy-policy`))} />
        <Route exact path="/terms-conditions" component={lazy(() => import(`./pages/terms-conditions`))} />
        <Route exact path="/disclaimer" component={lazy(() => import(`./pages/disclaimer`))} />
        <Route exact path="/careers" component={lazy(() => import(`./pages/careers`))} />
        <Route exact path="/current-openings" component={lazy(() => import(`./pages/current-openings`))} />
        <Route exact path="/apply-now/:id" component={lazy(() => import(`./pages/apply-now`))} />
        <Route exact path="/:cityName/package-details/:packageName" component={lazy(() => import(`./pages/package-details`))} />
        <Route exact path="/covid-pcr" component={lazy(() => import(`./pages/covid-pcr`))} />
        <Route exact path="/media" component={lazy(() => import(`./pages/media`))} />
        <Route exact path="/news" component={lazy(() => import(`./pages/news`))} />
        <Route exact path="/news-details/:id" component={lazy(() => import(`./pages/news-details`))} />
        <Route exact path="/contact-us" component={lazy(() => import(`./pages/contact-us`))} />
        <Route exact path="/technical-capabilities" component={lazy(() => import(`./pages/technical-capabilities`))} />
        <Route exact path="/thank-you-contact" component={lazy(() => import(`./pages/thank-you-contact`))} />
        <Route exact path="/thank-you-career" component={lazy(() => import(`./pages/thank-you-career`))} />
        <Route exact path="/error404" component={lazy(() => import(`./pages/error-404`))} />
        <Route exact path="/thank-you-home-visit" component={lazy(() => import(`./pages/thank-you-home-visit`))} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default AppViews;
