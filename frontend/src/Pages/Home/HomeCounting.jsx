import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { BsFacebook, BsFillHouseXFill, BsSuitHeart } from 'react-icons/bs'

const HomeCounting = () => {
  return (
    <div>
        <Container className='custom-section mx-auto rounded text-white'>
            <Row>
                <Col lg={3} md={4} sm={6}>
                    <div className='text-center'>
                         <BsSuitHeart className='caring-icon' />
                        <h2>2,645</h2>
                        <p className='text-secondary'>Happy Patients</p>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <div className='text-center'>
                        <BsFillHouseXFill className='caring-icon'/>
                        <h2>4,285</h2>
                        <p className='text-secondary'>Successful Home Care</p>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <div className='text-center'>
                        <BsFacebook className='caring-icon'/>
                        <h2>20</h2>
                        <p className='text-secondary'>Years Of Experience</p>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <div className='text-center'>
                        <BsFacebook className='caring-icon'/>
                        <h2>50</h2>
                        <p className='text-secondary'>Professional Nurses</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HomeCounting