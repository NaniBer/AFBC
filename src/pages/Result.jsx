import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import ResultData from "../backend Data/Results.json";

const Result = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Sort results by date in descending order
    const sortedData = ResultData.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setData(sortedData);
  }, []);

  return (
    <div className="section section-buttons" id="Results">
      <Container>
        <div className="title text-center mb-5">
          <h2 className="font-weight-semibold">Results</h2>
        </div>
        {/* Display only the latest 5 results */}
        {data.slice(0, 5).map((result, index) => (
          <Card key={index} className="mb-4">
            <CardBody>
              <CardTitle tag="h5">{result.description}</CardTitle>
              <CardText>
                <strong>Location:</strong> {result.location}
                <br />
                <strong>Date:</strong> {result.date}
                <br />
                <strong>Time:</strong> {result.time}
              </CardText>
              <div style={{ display: "flex", gap: "20px" }}>
                {result.matchups.map((matchup, idx) => (
                  <div key={idx} className="flex m-3">
                    <p>
                      <strong>Fighters: </strong>
                      {matchup.fighters.map((fighter, idx) => (
                        <span key={idx}>
                          {matchup.winner === fighter && (
                            <FontAwesomeIcon
                              icon={faCrown}
                              className="text-warning mr-1"
                            />
                          )}
                          {fighter}
                          {idx < matchup.fighters.length - 1 && (
                            <span
                              className="font-weight-semibold m-1"
                              style={{ fontSize: "1.2em" }}
                            >
                              {" "}
                              vs{" "}
                            </span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
        {/* Show the "See More" button */}
        {data.length > 5 && (
          <div className="text-center">
            <Link to="/resultsDetails">
              <Button color="primary">See More</Button>
            </Link>
          </div>
        )}
      </Container>
      <div
        className="hr-container"
        style={{ textAlign: "center", marginTop: "7rem" }}
      >
        <hr
          className="my-5"
          style={{ width: "30%", borderTop: "2px solid #ccc" }}
        />
      </div>
    </div>
  );
};

export default Result;
