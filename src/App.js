import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line

 import AgencyLandingPage from "demos/AgencyLandingPage.js";
 import AboutUsPage from "pages/AboutUs.js";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<AgencyLandingPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </>
  );
}
