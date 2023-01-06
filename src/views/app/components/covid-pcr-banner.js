import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CovidPcrBanner = () => {
    return (
        <section className="inner-banner covid-pcr">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h3 className="text-start text-white">Covid 19 <b>RT-PCR</b></h3>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default CovidPcrBanner;