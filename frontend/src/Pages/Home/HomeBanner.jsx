import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillPlayCircleFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

const HomeBanner = () => {
  return (
    <div className='home-background-overlay'>
        <Container className='py-4'>
        <Row>
            <Col lg={6}>
                <h1>We Provide Home Care Service For Your Family</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim nostrud</p>   
                <Button className='custom-btn'>Contact Us</Button>         
            </Col>
            <Col></Col>
        </Row>
        </Container>
    </div>
  )
}

export default HomeBanner