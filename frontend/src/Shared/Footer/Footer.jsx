import React from 'react'
import logo from '../../assets/logo/logo.png'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Bs9SquareFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
const Footer = () => {
  return (
    <div className='custom-section text-white m-0'>
      <Container>
        <Row>
          <Col lg={4}>
              <div>
                <img src={logo} className='img img-fluid' style={{width:'200px'}} alt="" />
                <p className='my-4 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet?</p>
                <div className='d-flex gap-4 mt-2'>
                <Bs9SquareFill className='footer-icon' />
                <span>Jl. Sunset Road No.815, Kuta</span>
                </div>
                <div className='d-flex gap-4 mt-2'>
                <Bs9SquareFill className='footer-icon' />
                <span>support@domain.com</span>
                </div>
                <div className='d-flex gap-4 mt-2'>
                <Bs9SquareFill className='footer-icon' />
                <span>(+62)81 548 5612</span>
                </div>
              </div>
          </Col>
          <Col lg={2}>
            <div>
              <h5>Quick Links</h5>
              <span class="custom-br"></span>
              <div className='mt-4'>
              <a href="#" className='text-white d-block'>About Us</a>
              <a href="#" className='text-white d-block mt-2'>Services</a>
              <a href="#" className='text-white d-block mt-2'>Appoinment</a>
              <a href="#" className='text-white d-block mt-2'>Blog</a>
              <a href="#" className='text-white d-block mt-2'>Contact</a>
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <div>
              <h5>Useful Links</h5>
              <span class="custom-br"></span>
              <div className='mt-4'>
              <a href="#" className='text-white d-block'>Privacry Policy</a>
              <a href="#" className='text-white d-block mt-2'>Terms and Condition</a>
              <a href="#" className='text-white d-block mt-2'>Disclaimer</a>
              <a href="#" className='text-white d-block mt-2'>Support</a>
              <a href="#" className='text-white d-block mt-2'>FAQ</a>
              </div>
            </div>
          </Col>
          <Col lg={4}>
              <div>
              <h5>Useful Links</h5>
              <span class="custom-br"></span>
                <div className='d-flex gap-4 mt-2'>
                <Bs9SquareFill className='footer-icon' />
                <span>Jl. Sunset Road No.815, Kuta</span>
                </div>
                <p className='my-4 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet?</p>
                <Button className='custom-btn'>Call Us Today</Button>         
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer