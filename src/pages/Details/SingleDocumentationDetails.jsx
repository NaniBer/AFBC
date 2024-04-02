import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import documentationData from "../../backend Data/Documentation.json";

const SingleDocumentationDetails = () => {
  const { id } = useParams();
  const [documentation, setDocumentation] = useState(null);

  useEffect(() => {
    const selectedDocumentation = documentationData.find(
      (item) => item.id === parseInt(id)
    );
    setDocumentation(selectedDocumentation);
  }, [id]);

  return (
    <div className="section section-buttons" id="DocumentationDetails">
      <Container>
        <div className="title text-center mb-5">
          <h2 className="font-weight-semibold">Documentation Details</h2>
        </div>
        {documentation && (
          <Row>
            <Col md="8" className="mx-auto">
              <div className="documentation-item">
                <h2 className="documentation-title mb-3">
                  {documentation.title}
                </h2>
                <p className="documentation-description mb-3">
                  {documentation.description}
                </p>
                <p className="documentation-last-update mb-3">
                  Last Updated: {documentation.last_update}
                </p>
                <Button
                  className="btn-round ml-1 mt-4"
                  color="secondary"
                  onClick={() => window.history.back()}
                >
                  Back to Documentation
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default SingleDocumentationDetails;
