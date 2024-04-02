import EventData from "../backend Data/Events.json";
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

const Event = () => {
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
  const currentDate = new Date();

  const upcomingEvents = data
    ? data.filter((event) => new Date(event.date) >= currentDate)
    : [];

  const firstFiveUpcomingEvents = upcomingEvents.slice(0, 5);

  const filteredData = selectedCategory
    ? firstFiveUpcomingEvents.filter(
        (event) => event.category === selectedCategory
      )
    : firstFiveUpcomingEvents;

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
            <Card key={index} className="mb-4">
              <CardBody>
                <Row>
                  <Col className="d-flex align-items-center">
                    <CardText className="mb-0">{event.date}</CardText>
                  </Col>

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
        {/* See More button */}
        <div className="text-center">
          <Link to="/eventsDetails">
            <Button color="primary">See More</Button>
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

export default Event;
