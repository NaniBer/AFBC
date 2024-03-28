import React from "react";

import { Container } from "reactstrap";

const IndexHeader = () => {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(" + require("assets/img/bgImage.jpg") + ")",
          opacity: "0.8" /* Adjust the opacity value as needed */,
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title" style={{ fontSize: "80px" }}>
                African Boxing Confederation
              </h1>
            </div>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
      </div>
    </>
  );
};

export default IndexHeader;
