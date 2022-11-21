import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from "./includes/header";
import Menubar from "./includes/menubar";
import Footer from "./includes/footer";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import AboutFounder from "./pages/about-founder";
import OurTeam from "./pages/our-team";
import Awards from "./pages/awards";
import CsrPolicy from "./pages/csr-policy";
import HomeVisit from "./pages/home-visit";
import Services from "./pages/services";
import Packages from "./pages/packages";
import FindALab from "./pages/find-a-lab";
import Brochures from "./pages/brochures";
import PackageDetails from "./pages/package-details";
import PrivacyPolicy from './pages/privacy-policy';
import TermsConditions from './pages/terms-conditions';
import Disclaimer from './pages/disclaimer';
import Careers from './pages/careers';
import CurrentOpeings from './pages/current-openings';
import ApplyNow from './pages/apply-now';
import ContactUs from './pages/contact-us';
import CovidPcr from './pages/covid-pcr';
import Media from './pages/media';
import News from './pages/news';
import Specialities from './pages/specialities';
import NewsDetails from './pages/news-details';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Header />
      <Menubar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us/' exact element={<AboutUs />} />
          <Route path='/about-founder/' exact element={<AboutFounder />} />
          <Route path='/our-team/' exact element={<OurTeam />} />
          <Route path='/awards/' exact element={<Awards />} />
          <Route path='/csr-policy/' exact element={<CsrPolicy />} />
          <Route path='/home-visit/' exact element={<HomeVisit />} />
          <Route path='/services/' exact element={<Services />} />
          <Route path='/specialities/' exact element={<Specialities />} />
          <Route path='/packages/' exact element={<Packages />} />
          <Route path='/find-a-lab/' exact element={<FindALab />} />
          <Route path='/brochures/' exact element={<Brochures />} />
          <Route path='/privacy-policy/' exact element={<PrivacyPolicy />} />
          <Route path='/terms-conditions/' exact element={<TermsConditions />} />
          <Route path='/disclaimer/' exact element={<Disclaimer />} />
          <Route path='/careers/' exact element={<Careers />} />
          <Route path='/current-openings/' exact element={<CurrentOpeings />} />
          <Route path='/apply-now/' exact element={<ApplyNow />} />
          <Route path='/package-details' exact element={<PackageDetails />} />
          <Route path='/covid-pcr/' exact element={<CovidPcr />} />
          <Route path='/media/' exact element={<Media />} />
          <Route path='/news/' exact element={<News />} />
          <Route path='/news-details/' exact element={<NewsDetails />} />
          <Route path='/contact-us/' exact element={<ContactUs />} />
        </Routes>
          <Footer />
	  </BrowserRouter>
    </Fragment>
  );
}

export default App;
