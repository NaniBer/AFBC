import NotableBoxersData from "../backend Data/Notable Boxers.json";
import React, { useState, useEffect } from "react";
import { Container, Tooltip as ReactstrapTooltip } from "reactstrap";

const NotableBoxers = () => {
  const [data, setData] = useState([]);
  const [tooltipOpen, setTooltipOpen] = useState(null);

  useEffect(() => {
    setData(NotableBoxersData);
  }, []);

  const toggleTooltip = (index) => {
    setTooltipOpen(tooltipOpen === index ? null : index);
  };

  return (
    <div className="section section-buttons" id="Boxers">
      <Container>
        <div className="title text-center mb-5">
          <h2 className="font-weight-semibold">Notable Boxers</h2>{" "}
        </div>
        <div className="row">
          {data.map((boxer, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6 col-sm-12 mb-4"
              id={`tooltipBoxer-${index}`}
              onMouseEnter={() => toggleTooltip(index)}
              onMouseLeave={() => toggleTooltip(null)}
              style={{ cursor: "pointer" }}
            >
              <div className="card d-flex flex-column h-100">
                <img
                  //   src={require(`../images/${boxer.picture}`).default}
                  alt={boxer.name}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <h3 className="card-title mb-3 font-weight-semibold">
                    {boxer.name}
                  </h3>
                  <p className="card-text">{boxer.biography}</p>
                  <ul className="list-unstyled">
                    {boxer.notable_games.map((game, idx) => (
                      <li key={idx} className="mb-2">
                        <p>
                          <strong>{game.event}: </strong>
                          {boxer.name} vs {game.opponent}
                        </p>{" "}
                        - {game.outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <ReactstrapTooltip
                placement="bottom"
                isOpen={tooltipOpen === index}
                target={`tooltipBoxer-${index}`}
                toggle={() => toggleTooltip(index)}
              >
                Read More...
              </ReactstrapTooltip>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NotableBoxers;
