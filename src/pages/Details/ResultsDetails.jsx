import ResultData from "../../backend Data/Results.json";
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

const ResultsDetails = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(true); // Set to true to display all results

  useEffect(() => {
    // Sort results by date in descending order
    const sortedData = ResultData.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setData(sortedData);
  }, []);

  // Function to toggle between showing all results and showing only the latest 5
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="section section-buttons" id="Results">
      <Container>
        <div className="title text-center mb-5">
          <h2 className="font-weight-semibold">Results</h2>
        </div>
        {data.map((result, index) => (
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

        {/* Go back to home page button */}
        <div className="text-center mt-3">
          <Link to="/">
            <Button color="secondary">Go Back to Home Page</Button>
          </Link>
        </div>
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

export default ResultsDetails;
