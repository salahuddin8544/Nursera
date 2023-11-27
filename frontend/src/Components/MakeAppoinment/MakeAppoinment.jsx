import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import appoinment from '../../assets/home/appoinment.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MakeAppoinment = () => {
  return (
    <div className='custom-section bg-white'>
        <Container className='bg-white p-4 rounded shadow-lg'>
        <Form>
            <Row>
                <Col lg={8}>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Full Name" />
                            </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Telephone</Form.Label>
                                <Form.Control type="text" placeholder="Telephone" />
                            </Form.Group>
                            </Col>
                            <Col lg={6}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" name="duedate" placeholder="Due date" />
                            </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Select Services</Form.Label>
                                <Form.Select aria-label="Default select example" placeholder='Services'>
                                <option>Selcet a service</option>
                                <option value="1">Home Care</option>
                                <option value="2">Senior Care</option>
                                <option value="3">Intensive Care</option>
                                <option value="3">Child Care</option>
                                </Form.Select>
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control placeholder='Your Message' as="textarea" rows={3} />
                        </Form.Group>
                </Col>
                <Col>
                    <img src={appoinment} className='img img-fluid h-100 w-100 rounded' alt="" />
                </Col>
            </Row>
            <Button type='submit' className='custom-btn mt-2'>Make Appoinment</Button>
            </Form>
        </Container>
    </div>
  )
}

export default MakeAppoinment