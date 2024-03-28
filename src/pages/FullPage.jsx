import React, { useEffect } from "react";

import TopNavbar from "components/Navbars/TopNavBar";
import IndexHeader from "components/Headers/IndexHeader.js";

import NewsContent from "./NewsContent";
import Documentation from "./Documentation";

import ContactUs from "./ContactUs";
import About from "./About";
import Event from "./Event";
import Result from "./Result";
import NotableBoxers from "./NotableBoxers";

const FullPage = () => {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <TopNavbar />
      <IndexHeader />
      <div className="main">
        <About />
        <NewsContent />
        <Event />
        <Result />
        <Documentation />
        <NotableBoxers />

        <ContactUs />
      </div>
    </>
  );
};

export default FullPage;
