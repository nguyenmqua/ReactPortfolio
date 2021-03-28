import React from "react";
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Row, Col } from 'reactstrap';
import SQLIcon from "../SQLIcon"
import MongooseIcon from "../MongooseIcon"
import HandleBarsIcon from "../HandleBarsIcon"
import ReactIcon from "../ReactIcon"
function Timeline(props){

    return(
        <VerticalTimeline animate = {true}>
        <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="December 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
            icon={<ReactIcon />}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <a href="https://reactstudybuddy.herokuapp.com/">
                        <h2 className="vertical-timeline-element-title">Study Buddy</h2>
                    </a>   
                    <p>
                        Technology Used: MongoDB, React.JS, ReactStrap
                    </p>
                    <a href="https://github.com/nguyenmqua/StudyBuddyReact">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </a>
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="./images/StudyBuddy.JPG"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement>
        
        <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="December 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
            icon={<ReactIcon />}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <a href="https://sportstalkapp.herokuapp.com/">
                        <h2 className="vertical-timeline-element-title">Sports Talk 2.0</h2>
                    </a>   
                    <p>
                        Technology Used: MongoDB, React.JS, Sematic-UI
                    </p>
                    <a href="https://github.com/nguyenmqua/SportstalkReact">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </a>
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="./images/ST2.JPG" alt="icon" width = "200"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="October 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
            icon={<SQLIcon />}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <a href="https://protected-eyrie-90366.herokuapp.com/">
                        <h2 className="vertical-timeline-element-title">Sports Talk</h2>
                    </a>   
                    <p>
                        Technology Used: MySQL, Express-HandleBars, Node.js 
                    </p>
                    <a href="https://github.com/nguyenmqua/Sports-Talk">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </a>
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="/../images/SportsTalk.PNG" alt="icon" width = "200"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="October 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
            icon={<MongooseIcon />}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <a href="https://shrouded-plains-58176.herokuapp.com/">
                    <h2 className="vertical-timeline-element-title">Progressive Budget</h2>
                    </a>
                    <p>
                    Technology Used: Mongoose, Node.js 
                    </p>
                    < a href=" https://github.com/nguyenmqua/BudgetApp">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </a> 
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="/images/Budget.PNG"  alt="icon" width = "200"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement>      
          <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="October 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
            icon={<MongooseIcon />}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <a href="https://quality-workout-fitness-app.herokuapp.com">
                    <h2 className="vertical-timeline-element-title">Fitness Tracker</h2>
                    </a>
                    <p>
                    Technology Used: Mongoose, Node.js 
                    </p>
                    < a href=" https://github.com/nguyenmqua/exercises-workout">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </a> 
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="/images/Fitness.PNG" alt="icon" width = "200"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement>   
          <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="September 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
            icon={<HandleBarsIcon />}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <a href="https://thawing-wildwood-02806.herokuapp.com/">
                    <h2 className="vertical-timeline-element-title">Burger Ordering App</h2>
                    </a>
                    <p>
                    Technology Used: Express, HandleBars, Node.js 
                    </p>
                    < a href="  https://github.com/nguyenmqua/burger">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </a> 
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="/images/burger.PNG" alt="icon" width = "200"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement> 

          <VerticalTimelineElement     
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="September 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)',  color: '#fff' }}
            icon={<SQLIcon />}
          >
            <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6 }} >
                    <a href="https://www.youtube.com/watch?v=czLlFn1dMEM">
                    <h2 className="vertical-timeline-element-title">Employee Tracker</h2>
                    </a>
                    <p>
                    Technology Used: SQL, Node.js 
                    </p>
                    < a href=" https://github.com/nguyenmqua/Employee-Tracker">
                        <p className="vertical-timeline-element-subtitle">GitHub Repo</p>
                    </a> 
                </Col>
                <Col sm="12" md={{ size: 6}} className ="float-right" >
                    <img src ="../../images/Employee.PNG" alt="icon" width = "200"></img>
                </Col>        
            </Row>
            </Container>
          </VerticalTimelineElement> 
        </VerticalTimeline>
    )
}

export default Timeline;