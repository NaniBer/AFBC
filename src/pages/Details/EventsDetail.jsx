import EventData from "../../backend Data/Events.json";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const EventsDetails = () => {
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setData(EventData);
  }, []);

  const categories = [
    ...new Set(data ? data.map((event) => event.category) : []),
  ];

  const filterEventsByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory
    ? data.filter((event) => event.category === selectedCategory)
    : data;

  return (
    <div className="section section-buttons" id="Events">
      <Container>
        <div className="title text-center mb-5">
          <h2 className="font-weight-semibold">Events Details</h2>
        </div>
        {/* Filter buttons */}
        <div className="text-center mb-4">
          <Button
            color="info"
            className="mr-2"
            onClick={() => filterEventsByCategory(null)}
            active={selectedCategory === null}
          >
            All
          </Button>
          {categories.map((category, index) => (
            <Button
              key={index}
              color="info"
              onClick={() => filterEventsByCategory(category)}
              className="mr-2 mb-1"
              active={selectedCategory === category}
            >
              {category}
            </Button>
          ))}
        </div>

        {filteredData &&
          filteredData.map((event, index) => (
            <div key={index} className="mb-4">
              <CardBody>
                <Row>
                  <Col className="d-flex align-items-center">
                    <CardText className="mb-0">{event.date}</CardText>
                  </Col>

                  <Col xs={10} className="pl-4">
                    <CardTitle tag="h5" className="mb-1">
                      {event.title}
                    </CardTitle>
                    <CardText className="mb-1">{event.place}</CardText>
                    <CardText className="mb-0">{event.description}</CardText>
                  </Col>
                </Row>
              </CardBody>
            </div>
          ))}

        <div className="text-center mt-4">
          <Link to="/">
            <Button color="secondary">Back to Events</Button>
          </Link>
        </div>
      </Container>
      <div
        className="hr-container"
        style={{ textAlign: "center", marginTop: "7rem" }}
      >
        <hr style={{ width: "30%", borderTop: "2px solid #ccc" }} />
      </div>
    </div>
  );
};

export default EventsDetails;
