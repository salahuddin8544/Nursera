import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import gallery1 from '../../assets/home/gallery-1.jpg'
import gallery2 from '../../assets/home/gallery-2.jpg'
import gallery3 from '../../assets/home/gallery-3.jpg'
import gallery4 from '../../assets/home/gallery-4.jpg'
import gallery5 from '../../assets/home/gallery-5.jpg'
import gallery6 from '../../assets/home/gallery-6.jpg'
const OurSuccessHome = () => {
  return (
    <div className='custom-section'>
        <Container>
            <Row>
                <Col className='text-white text-center'>
                    <h5 className='custom-waring-color'>Our Gallery</h5>
                    <h2>Captured Moment With Our Patients</h2>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <img src={gallery1} className='img-fluid rounded' alt="" />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <img src={gallery2} className='img-fluid rounded' alt="" />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <img src={gallery3} className='img-fluid rounded' alt="" />
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col lg={4} md={6} sm={12}>
                    <img src={gallery4} className='img-fluid rounded' alt="" />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <img src={gallery5} className='img-fluid rounded' alt="" />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <img src={gallery6} className='img-fluid rounded' alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OurSuccessHome