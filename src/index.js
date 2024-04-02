import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import FullPage from "pages/FullPage";
import EventsDetails from "pages/Details/EventsDetail";

import SingleNewsDetails from "pages/Details/SingleNewsDetails";
import AllNews from "pages/AllNews";
import SingleDocumentationDetails from "pages/Details/SingleDocumentationDetails";
import ResultsDetails from "pages/Details/ResultsDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FullPage />} />
      <Route path="/allNews" element={<AllNews />} />
      <Route path="/eventsDetails" element={<EventsDetails />} />
      <Route path="/newsDetails/:id" element={<SingleNewsDetails />} />
      <Route
        path="/documentDetails/:id"
        element={<SingleDocumentationDetails />}
      />
      <Route path="/resultsDetails" element={<ResultsDetails />} />
    </Routes>
  </BrowserRouter>
);
