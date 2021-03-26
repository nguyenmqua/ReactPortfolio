import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

function Home(props){
    return( 
        <Container className="main" fluid>
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }} >
                   <Card>
                       <CardHeader className="title">
                           About Me
                       </CardHeader>
                       <CardBody>   
                            <Col sm="12" md={{ size: 2 }} >
                            <img  src="https://ca.slack-edge.com/T014U3JM54M-U01514YRQTH-af395cfd4625-512" className="avatar-flip float-right " alt="Responsive" align="left" />
                            </Col>
                            <Col sm="12" md={{ size: 8 }} className="float-left" >   
                            Full-stack web developer leveraging a business and education background to build a more intuitive user experience. 
                            </Col>
                       </CardBody>      
                   </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home