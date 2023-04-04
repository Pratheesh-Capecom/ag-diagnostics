import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import errorImage from "assets/images/error404.png";
import { Link } from "react-router-dom";


const ErrorContent = () => {
  return (
    <>
      <section className="gray-bg-light">
        <Container>
          <Row className="align-items-center justify-content-between flex-column-reverse flex-lg-row">
            <Col>
              <p className="text-center">
              <img src={errorImage} alt="" className="img-fluid"/>
              </p>
              <h3 className="text-dark text-center mb-0">
                <strong className="text-orange">
                  Page Not Found!
                </strong>
              </h3>
              <p className="text-center">
                The page you were looking for doesn't exist!
              </p>
              <p className="text-center">
                <Link to="/" className="orange-btn">Goto Home</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ErrorContent;
