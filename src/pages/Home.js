import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Resume from "../components/Resume/Resume.pdf";
import Timeline from "../components/VerticleTimeline";

function Home(props) {
  return (
    <Container className="main" fluid>
      <Row>
        <Col md={{ size: 6 }}>
          <Card>
            <CardHeader className="title">I build websites.</CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <img
                    src="/images/profile.jpg"
                    className="avatar-flip "
                    alt="Responsive"
                    align="left"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="profile-paragraph float-left">
                    Full-stack web developer leveraging a business and education
                    background to build a more intuitive user experience.
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="resume">
                    <a href={Resume} download>
                      <i className="fas fa-download"> Resume</i>
                    </a>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="timeline">
          <Timeline />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
