import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png';
import logoheader from '../images/logoheader.png';
import homeicon from '../images/homeicon.png';
import { Link } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <header>
                <Container>
                    <Row className="g-0 align-items-center">
                        <Col>
                            <div className="top-header">
                                <div className="logo1">
                                    <Link to="/">
                                        <img src={logo} alt="logo" className="img-fluid" />
                                    </Link>
                                </div>
                                <div className="logo2 d-none d-md-block">
                                    <img src={logoheader} alt="" className="img-fluid" />
                                </div>
                                <div className="header-doctor-div d-none d-md-block">
                                    <p className="header-doctor mb-2">Dr.Awanti Golwilkar
                                        <small>MBBS, MD(Pathology)</small></p>
                                    <p className="header-doctor">Dr.Vinanti Golwilkar
                                        <small>MBBS, MD(Pathology)</small></p>
                                </div>
                                <div className="header-bg d-none d-xl-block">
                                    <div className="top-phone">
                                        <p>For Home Visit, call us at
                                            <strong>020 6763 6763</strong></p>
                                        <img src={homeicon} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>                            
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    }
}

export default Main;