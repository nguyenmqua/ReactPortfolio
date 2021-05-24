import React, {useState} from "react";
import { Container, Row, Col, Button,Label, FormGroup,Input, FormText,  } from 'reactstrap';


function Contact(props){
    const [Name, setName] = useState("")
    const [Message, setMessage] = useState("")
    const [Email, setEmail] =useState("")

    const sendFeedback =(templateId, variables) =>  {
        window.emailjs.send(
            'service_6as3cq8', templateId,
          variables
          ).then(res => {
            window.location.href = "/"
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }
    
    const handleUserBtnClick = async (e) => {
        try {
            const templateId = 'template_rmtdr0h';
            sendFeedback(templateId, {message: Message, from_name: Name, reply_to: Email})
        } catch (error) {
          console.log(
            "There was an error processing your results, please try again",
            error
          );
        }
      }
    
    

    return(
        <Container  fluid>
            <Row className="aboutMe">
                <Col sm="12" md={{ size: 8, offset: 2 }} >
                    <div className="contactme">Contact Me</div>
                    <FormGroup row>
                        <Label className="label" for="" sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input type="text" name="name" id="name"  onChange={(e) => setName(e.target.value)}/>
                            <FormText color="muted" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label className="label" for="" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="text" name="name" id="name"  onChange={(e) => setEmail(e.target.value)}/>
                            <FormText color="muted" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label className="label" for="message" color="white" sm={2}>Message</Label>
                        <Col sm={10}>
                        <Input type="textarea"  name="text" id="exampleText"  onChange={(e) => setMessage(e.target.value)}/>
                        <FormText color="muted" />
                        </Col>
                    </FormGroup>
                    <Button onClick ={handleUserBtnClick}>Submit Post</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact