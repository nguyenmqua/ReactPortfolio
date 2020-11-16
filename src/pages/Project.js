import React from "react";
import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Row, Col } from 'reactstrap';

function Project(props){ 
    return(
        
        <VerticalTimeline animate = {true}>
            <h1>My Works</h1>
          <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="October 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <Link to="https://protected-eyrie-90366.herokuapp.com/">
                        <h2 className="vertical-timeline-element-title">Sports Talk</h2>
                    </Link>   
                    <p>
                        Technology Used: MySQL, Express-HandleBars, Node.js 
                    </p>
                    <Link to="https://github.com/nguyenmqua/Sports-Talk">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </Link>
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="./SportsTalk.PNG" width = "200"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement>
          <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="October 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <Link to="https://shrouded-plains-58176.herokuapp.com/">
                    <h2 className="vertical-timeline-element-title">Progressive Budget</h2>
                    </Link>
                    <p>
                    Technology Used: Mongoose, Node.js 
                    </p>
                    < Link to=" https://github.com/nguyenmqua/BudgetApp">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </Link> 
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="./Budget.PNG" width = "200"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement>      
          <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="October 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <Link to="https://quality-workout-fitness-app.herokuapp.com">
                    <h2 className="vertical-timeline-element-title">Fitness Tracker</h2>
                    </Link>
                    <p>
                    Technology Used: Mongoose, Node.js 
                    </p>
                    < Link to=" https://github.com/nguyenmqua/exercises-workout">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </Link> 
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="./Fitness.PNG" width = "200"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement>   
          <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="September 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <Link to="https://thawing-wildwood-02806.herokuapp.com/">
                    <h2 className="vertical-timeline-element-title">Burger Ordering App</h2>
                    </Link>
                    <p>
                    Technology Used: Express, HandleBars, Node.js 
                    </p>
                    < Link to="  https://github.com/nguyenmqua/burger">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </Link> 
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="./burger.PNG" width = "200"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement> 

          <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="September 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <Link to="https://www.youtube.com/watch?v=czLlFn1dMEM">
                    <h2 className="vertical-timeline-element-title">Employee Tracker</h2>
                    </Link>
                    <p>
                    Technology Used: SQL, Node.js 
                    </p>
                    < Link to=" https://github.com/nguyenmqua/Employee-Tracker">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </Link> 
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="./Employee.PNG" width = "200"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement> 
          <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="September 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <Link to="https://www.youtube.com/watch?v=czLlFn1dMEM">
                    <h2 className="vertical-timeline-element-title">Employee Tracker</h2>
                    </Link>
                    <p>
                    Technology Used: SQL, Node.js 
                    </p>
                    < Link to=" https://github.com/nguyenmqua/Employee-Tracker">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </Link> 
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="./Employee.PNG" width = "200"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement> 
                  
        
        </VerticalTimeline>
    )
}

export default Project
