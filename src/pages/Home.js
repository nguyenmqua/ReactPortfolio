import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Resume from "../components/Resume/Resume.pdf"
function Home(props) {
    return (
        <Container className="main" fluid>
            <Row>
            <Col md={{ size: 8, offset: 2}} >
            <Card>
                <CardHeader className="title">
                    About Me
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col sm="12" md={{ size: 4 }} >
                            <img src="https://ca.slack-edge.com/T014U3JM54M-U01514YRQTH-af395cfd4625-512" className="avatar-flip " alt="Responsive" align="left" />
                        </Col>
                        <Col sm="12" md={{ size: 8 }} >
                            <Row>
                                <div className="profile-paragraph float-left">
                                    Full-stack web developer leveraging a business and education background to build a more intuitive user experience.
                            </div>
                            </Row>
                            <Row>
                                <div className="resume">
                                    <a href={Resume} download><i className="fas fa-download">  Resume</i></a>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            </Col>
            </Row>
        </Container>
    )
}

export default Home