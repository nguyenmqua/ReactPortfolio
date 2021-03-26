// import React, {useState} from "react";
// import { Container, Row, Col, Button,Label, FormGroup,Input, FormText,  } from 'reactstrap';

// function Contact(props){
//     const [Name, setName] = useState("")
//     const [Message, setMessage] = useState("")

    
//     const handleUserBtnClick = async (e) => {
//         try {
//           window.location.href = "/"
//         } catch (error) {
//           console.log(
//             "There was an error processing your results, please try again",
//             error
//           );
//         }
//       }

//     return(
//         <Container fluid>
//             <Row>
//                 <Col sm="12" md={{ size: 8, offset: 2 }} >
//                     <FormGroup row>
//                         <Label for="" sm={2}>Name</Label>
//                         <Col sm={10}>
//                             <Input type="text" name="name" id="name"  onChange={(e) => setName(e.target.value)}/>
//                             <FormText color="muted" />
//                         </Col>
//                     </FormGroup>
//                     <FormGroup row>
//                         <Label for="message" sm={2}>Message</Label>
//                         <Col sm={10}>
//                         <Input type="text" name="message" id="message"  onChange={(e) => setMessage(e.target.value)}/>
//                         <FormText color="muted" />
//                         </Col>
//                     </FormGroup>
//                     <Button onClick ={handleUserBtnClick}>Submit Post</Button>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Contact