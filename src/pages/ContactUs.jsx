import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

function ContactUs() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <p>
            <span style={{ fontWeight: "bold", fontSize: "24px" }}>AFBC</span>
            <br />
            <br />
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              Confédération Africaine de Boxe
            </span>
            <br />
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              African Boxing Confederation
            </span>
            <br />
            <br />
            <br />
            Boîte postale n°14476, Yaoundé
            <br />
            République du Cameroun, Afrique
            <br />
            <br />
            Phone 1 : +237 99 274 277
            <br />
            Phone 2 : +237 696 461 335
            <br />
            <br />
            E-mail : <a href="mailto:afbc2022@yahoo.com">afbc2022@yahoo.com</a>
          </p>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <div className="title text-center mb-5">
                <h2 className="font-weight-semibold">
                  Reach out to us on our socials
                </h2>
              </div>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="twitter-sharrre btn-round"
                color="twitter-bg"
                href="#pablo"
                id="tooltip3373767"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter" /> Twitter
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip3373767">
                Tweets
              </UncontrolledTooltip>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="#833AB4"
                href="#pablo"
                id="tooltip840791273"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-instagram" /> Instagram
              </Button>

              <UncontrolledTooltip delay={0} target="tooltip840791273">
                Instagram Page
              </UncontrolledTooltip>
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="#pablo"
                id="tooltip68961360"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" /> Facebook
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip68961360">
                Facebook Page
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactUs;
