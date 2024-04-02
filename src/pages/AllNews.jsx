import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Button, Container, Row, Col } from "reactstrap";
import newsData from "../backend Data/News.json";

const AllNews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(newsData);
  }, []); // Empty dependency array to ensure useEffect runs only once

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
                    <Col className="mb-5" key={index}>
                      <div className="news-item">
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
                        <Link to={`/newsDetails/${item.id}`}>
                          <Button
                            className="btn-round ml-1 mt-2"
                            color="info"
                            type="button"
                          >
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </Col>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Link to="/">
                    <Button color="secondary">Back to Homepage</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllNews;
