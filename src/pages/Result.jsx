import ResultData from "../backend Data/Results.json";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { Container, Card, CardBody, CardTitle, CardText } from "reactstrap";

const Result = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(ResultData);
  }, []);

  return (
    <div className="section section-buttons" id="Results">
      <Container>
        <div className="title text-center mb-5">
          <h2 className="font-weight-semibold">Results</h2>
        </div>
        {/* Display each Result separately */}
        {data &&
          data.map((result, index) => (
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
