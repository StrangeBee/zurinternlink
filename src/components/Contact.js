import React from 'react';
import Footer from '../components/Footer.js';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Contact() {
  return (
    <Container className='con'>
        <div className='main-content'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind</p>
            <div>
                <Form className='form-con'>
                    <Row className='mb-3'>
                        <Col className='form-i-con'>
                            <Form.Label>First name</Form.Label>
                            <Form.Control placeholder="Enter your first name" id='first_name' required/>
                        </Col>
                        <Col className='form-i-con'>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control placeholder="Enter your last name" id='last_name' required/>
                        </Col>
                    </Row>

                    <Form.Group className="input-con mb-3" controlId="formGroupEmail" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" id='email' required/>
                    </Form.Group>

                    <Form.Group className="input-con mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Send me a message and i'll reply you as soon as possible..."  id='message' required/>
                    </Form.Group>
                    
                    <div className='check-con'>
                        <input type="checkbox" id="checkbox" name="checkbox" value="checkbox" />
                        <label for="checkbox">You agree to providing your data to Oduola Ebenezer who may contact you.</label>
                    </div>
                
                    <Button variant="primary" size="lg" id='btn__submit' type='submit'>
                        Send Message
                    </Button>

                </Form>
            </div>
        </div>

        <Footer />
    </Container>
  );
}

export default Contact;