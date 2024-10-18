import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TeamData from '../data/team.json';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

export default function TeamContent() {

    const initialShowState = Object.fromEntries(
        TeamData.map((teams) => [teams.name, false])
    );
    const [show, setShow] = React.useState(initialShowState);
    const toggleShow = (id) =>
        setShow((prev) => {
            return { ...prev, [id]: !prev[id] };
        });

    return (
        <>
            <section className="bg-light-orange">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={10}>
                            <h5 className="text-dark text-center">We take great pride in the efficiency and ethics practised by our technical team with over 20 years of collective experience. The technical team not only uses technology but practically lives with technology. Our knowledge of the technology used and the constant thirst to adapt to new, innovative practices help us remain at the top of our game.</h5>
                            <p className="text-dark text-center">Each of them is heading the various departments and is responsible for operational excellence within the department and delivery of accurate reports in the shortest possible time.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="gray-bg-light teams">
                <Container>
                    <Row className="justify-content-center">
                        {TeamData.map((teams, key) => {
                            return (
                                <Col xs={12} sm={6} md={6} lg={4} key={key}>
                                    <Link className="teams-card" onClick={() => toggleShow(teams.name)}>
                                        <img src={teams.image} alt="" className="img-fluid" />
                                        <h4>{teams.name}</h4>
                                        <h6>{teams.department}</h6>
                                    </Link>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </section>

            {TeamData.map(teammodel => {
                return (
                    <Modal size="lg" show={show[teammodel.name]}
                        onHide={() => toggleShow(teammodel.name)} aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header closeButton>
                            <Modal.Title><h4>{teammodel.name} <small>{teammodel.department}</small></h4></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row className="justify-content-between">
                                <Col xs={12} sm={12} md={12} lg={4} className="text-center">
                                    <div className="about-image me-3">
                                        <img src={teammodel.image} alt="" className="img-fluid" />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={8}>
                                    <h5 className="text-dark">{teammodel.headText}</h5>
                                    <p>{teammodel.paratext}</p>
                                </Col>
                            </Row>
                        </Modal.Body>
                    </Modal>
                );
            })}
        </>
    );
}
