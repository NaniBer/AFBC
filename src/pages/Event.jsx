import EventData from "../backend Data/Events.json";
import React, { useState, useEffect } from "react";
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

const Event = () => {
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setData(EventData);
  }, []);

  // Function to extract unique category names
  const categories = [
    ...new Set(data ? data.map((event) => event.category) : []),
  ];

  // Function to handle filtering events by category
  const filterEventsByCategory = (category) => {
    setSelectedCategory(category);
  };

  // Filter the events based on the selected category
  const filteredData = selectedCategory
    ? data.filter((event) => event.category === selectedCategory)
    : data;

  return (
    <div className="section section-buttons" id="Events">
      <Container>
        <div className="title text-center mb-5">
          <h2 className="font-weight-semibold">Events</h2>
        </div>
        {/* Filter buttons */}
        <div className="text-center mb-4">
          <Button
            color="info"
            className="mr-2"
            onClick={() => filterEventsByCategory(null)} // Show all events
            active={selectedCategory === null}
          >
            All
          </Button>
          {categories.map((category, index) => (
            <Button
              key={index}
              color="info"
              onClick={() => filterEventsByCategory(category)}
              className="mr-2"
              active={selectedCategory === category}
            >
              {category}
            </Button>
          ))}
        </div>
        {/* Display filtered events */}
        {filteredData &&
          filteredData.map((event, index) => (
            <Card key={index} className="mb-4">
              <CardBody>
                <Row>
                  {/* First column for date */}
                  <Col className="d-flex align-items-center">
                    <CardText className="mb-0">{event.date}</CardText>
                  </Col>
                  {/* Second column for title and place */}
                  <Col xs={10} className="pl-4">
                    <CardTitle tag="h5" className="mb-1">
                      {event.title}
                    </CardTitle>
                    <CardText className="mb-0">{event.place}</CardText>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
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

export default Event;
