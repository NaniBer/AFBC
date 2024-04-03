import AboutData from "../backend Data/About.json";
import leadershipHistory from "../backend Data/LeadershipHistory.json";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(AboutData);
  }, []);

  return (
    <div className="section section-buttons" id="About">
      <Container>
        <div className="title text-center mb-5">
          <h2 className="font-weight-semibold">About Us</h2>{" "}
        </div>

        <Row>
          <Col>
            {data && (
              <>
                <h3 className="mb-3">{data.title}</h3>
                <p>{data.description}</p>
                <h4 className="mt-4">Mission</h4>
                <p>{data.mission}</p>
                <h4>Vision</h4>
                <p>{data.vision}</p>
                <h4>History</h4>
                <p>{data.history}</p>
              </>
            )}
            <br />
            <br />
            {leadershipHistory.length > 0 && (
              <>
                <div className="title text-center mb-5">
                  <h2 className="font-weight-semibold">
                    {" "}
                    The committee of the African Boxing Confederation
                  </h2>{" "}
                </div>
                {/* <h2 className="mt-5 font-weight-bold"></h2> */}
                <ul>
                  {leadershipHistory.map((period, index) => (
                    <li key={index}>
                      <strong className="font-weight-bold">
                        {period.period}
                      </strong>
                      <ul>
                        <li>
                          <strong>President:</strong> {period.president}
                        </li>
                        {period.vicePresidents && (
                          <li>
                            <strong>Vice Presidents:</strong>{" "}
                            {period.vicePresidents.join(", ")}
                          </li>
                        )}
                        <li>
                          <strong>General Secretary:</strong>{" "}
                          {period.generalSecretary}
                        </li>
                        <li>
                          <strong>Board Members:</strong>
                          <ul>
                            {period.boardMembers.map((member, index) => (
                              <li key={index}>{member}</li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                      <br />
                      <br />
                    </li>
                  ))}
                </ul>
              </>
            )}{" "}
          </Col>
        </Row>
      </Container>
      <div
        className="hr-container "
        style={{ textAlign: "center", marginTop: "7rem" }}
      >
        <hr style={{ width: "30%", borderTop: "2px solid #ccc" }} />
      </div>
    </div>
  );
};

export default About;
