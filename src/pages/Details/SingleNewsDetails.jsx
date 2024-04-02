import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import newsData from "../../backend Data/News.json";

const SingleNewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const selectedNews = newsData.find((item) => item.id === parseInt(id));
    setNews(selectedNews);
  }, [id]);

  return (
    <div className="section section-buttons" id="NewsDetails">
      <Container>
        <div className="title text-center mb-5">
          <h2 className="font-weight-semibold">News Details</h2>
        </div>
        {news && (
          <Row>
            <Col md="8" className="mx-auto">
              <div className="news-item">
                <img src={news.image} alt={news.title} className="news-image" />
                <h2 className="news-title mb-3">{news.title}</h2>
                <p className="news-description mb-3">{news.description}</p>
                <p className="news-date mb-3">Date: {news.date}</p>
                <p className="news-data">{news.data}</p>
                <Button
                  className="btn-round ml-1 mt-4"
                  color="secondary"
                  onClick={() => window.history.back()}
                >
                  Back to News
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default SingleNewsDetails;
