import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

function Home(props){
    return(
        <p>
        <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }} >
                   <Card>
                       <CardHeader className="title">
                           About Me
                       </CardHeader>
                       <CardBody>   
                            <Col sm="12" md={{ size: 2 }} >
                            <img className="float-right" src="https://ca.slack-edge.com/T014U3JM54M-U01514YRQTH-af395cfd4625-512" className="avatar-flip " alt="Responsive image" align="left" />
                            </Col>
                            <Col sm="12" md={{ size: 8 }} className="float-left" >   
                            Full-stack web developer leveraging a business and education background to build a more intuitive user experience. 
                            <Row>
                                <a href = "https://my.indeed.com/p/quan-0jehk1g">Resume</a>
                            </Row>
                            </Col>
                       </CardBody>
                       
                   </Card>
                </Col>
            </Row>
        </Container>
        </p>
    )
}

export default Home