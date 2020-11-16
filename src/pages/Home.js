import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

function Home(props){
    return(
        <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }} >
                   <Card>
                       <CardHeader>
                           About Me
                       </CardHeader>
                       <CardBody>    
                            Full-stack web developer leveraging a business and education background to build a more intuitive user experience. 
                       </CardBody>
                   </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home