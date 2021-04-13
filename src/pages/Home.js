import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Resume from "../components/Resume/Resume.pdf"
function Home(props) {
    return (
        <Container className="main" fluid>
            <Row>
            <Col md={{ size: 6}} >
            <Card>
                <CardHeader className="title">
                    About Me
                </CardHeader>
                <CardBody>
                   
                            <img src ="/images/profile.jpg" className="avatar-flip " alt="Responsive" align="left" />
                      
                    
                                <div className="profile-paragraph float-left">
                                    Full-stack web developer leveraging a business and education background to build a more intuitive user experience.
                            </div>
                          
                                <div className="resume">
                                    <a href={Resume} download><i className="fas fa-download">  Resume</i></a>
                                </div>
                           
                </CardBody>
            </Card>
            </Col>
            </Row>
        </Container>
    )
}

export default Home