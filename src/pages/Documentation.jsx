import documentationData from "../backend Data/Documentation.json";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
// reactstrap components
import { Container, Tooltip as ReactstrapTooltip } from "reactstrap";

const Documentation = () => {
  const [data, setData] = useState([]);
  const [tooltipOpen, setTooltipOpen] = useState(null);

  useEffect(() => {
    setData(documentationData);
  }, []); // Ensure the effect runs only once after the initial render

  const toggleTooltip = (index) => {
    setTooltipOpen(tooltipOpen === index ? null : index);
  };

  return (
    <div className="section section-buttons" id="Documentation">
      <Container>
        <div className="title text-center mb-5">
          <h2 className="font-weight-semibold">Documentations</h2>{" "}
        </div>
        <div className="documents-list row ">
          {data.map((item, index) => (
            <div
              className="document-item col-lg-3 col-md-4 col-sm-6 mb-4 "
              id={`tooltipBox-${index}`}
              onMouseEnter={() => toggleTooltip(index)}
              onMouseLeave={() => toggleTooltip(null)}
              style={{ cursor: "pointer" }}
            >
              <Link key={index} to={`/documentdetails/${item.id}`} clas>
                <div className="card d-flex flex-column h-100">
                  <div className="card-body">
                    <h3 className="card-title mb-3 font-weight-semibold">
                      {item.title}
                    </h3>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last Updated: {item.last_update}
                      </small>
                    </p>
                  </div>
                </div>
                <ReactstrapTooltip
                  placement="bottom"
                  isOpen={tooltipOpen === index}
                  target={`tooltipBox-${index}`}
                  toggle={() => toggleTooltip(index)}
                >
                  Read More...
                </ReactstrapTooltip>
              </Link>
            </div>
          ))}
        </div>
        <div
          className="hr-container "
          style={{ textAlign: "center", marginTop: "7rem" }}
        >
          <hr
            className=""
            style={{ width: "30%", borderTop: "2px solid #ccc" }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Documentation;
