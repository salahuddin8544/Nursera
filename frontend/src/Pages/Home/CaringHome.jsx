import React from 'react'
import care1 from '../../assets/home/care-1.jpg'
import care2 from '../../assets/home/care-2.jpg'
import Container from 'react-bootstrap/esm/Container'
import { BsCheckCircle, BsCheckCircleFill, BsSuitHeart } from 'react-icons/bs'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
const CaringHome = () => {
  return (
    <div className='custom-section bg-white'>
        <Container>
        <Row>
            <Col lg={4} md={6} sm={12} className='position-relative caring-home-section'>
                <img src={care1} alt="care-1" className='img img-fluid rounded' />
                <div className='bg-white shadow-lg rounded p-4 w-75 mx-auto d-flex justify-content-center gap-4 position-absolute caring-love'>
                <BsSuitHeart className='caring-icon' />
                <div>
                    <span>2,443</span>
                    <span>+</span>
                    <h5>Happy Patients</h5>
                </div>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12} >
                <img src={care2} alt="care-1" className='img img-fluid rounded' />
            </Col>
            <Col lg={4} md={6} sm={12}  className='py-2'>
                <h5 className='custom-waring-color'>About Nursera</h5>  
                <h2>We’re Take Care of Your Problems Carefully</h2>
                <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum odit aut iste dolore eum deserunt laboriosam cumque cupiditate provident.</p>
                <div className='d-flex gap-3 align-items-center justify-content-center'>
                    <span><BsCheckCircleFill className='custom-waring-color' /></span>
                    <p className='m-0 text-sm text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quod!</p>
                </div>
                <div className='d-flex gap-3 align-items-center justify-content-center'>
                    <span><BsCheckCircleFill className='custom-waring-color' /></span>
                    <p className='m-0 text-sm text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quod!</p>
                </div>
                <div className='d-flex gap-3 align-items-center justify-content-center'>
                    <span><BsCheckCircleFill className='custom-waring-color' /></span>
                    <p className='m-0 text-sm text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quod!</p>
                </div>
                <Button className='custom-btn mt-2'>Mor About Us</Button>         
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default CaringHome