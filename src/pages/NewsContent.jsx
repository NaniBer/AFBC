import newsData from "../backend Data/News.json";
import React, { useState, useEffect } from "react";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CustomInput,
} from "reactstrap";

const NewsContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(newsData);
  });
  return (
    <div id="News">
      <div className="section section-buttons">
        <Container>
          <div className="title text-center mb-5">
            <h2 className="font-weight-semibold">News</h2>
          </div>
          <div id="buttons">
            <Row>
              <Col md="8">
                <div className="news-box">
                  {data.map((item, index) => (
                    <Col className="mb-5">
                      <div className="news-item " key={index}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="news-image"
                        />
                        <h2 className="news-title">{item.title}</h2>
                        <p className="news-description">
                          {item.description.slice(0, 100)}...
                        </p>
                        <p className="news-date">Date: {item.date}</p>
                      </div>
                      <Button
                        className="btn-round ml-1 mt-2"
                        color="info"
                        type="button"
                        c
                      >
                        Read More
                      </Button>
                    </Col>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NewsContent;
