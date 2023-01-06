import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const ThankYouContent = () => {
  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={12} lg={10}>
              <h3 className="text-orange">Your form has been submitted successfully!</h3>
              <h5 className="text-center">We'll get in touch with you soon...</h5>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ThankYouContent;
