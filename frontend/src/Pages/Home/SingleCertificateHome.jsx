import React from 'react'
import Col from 'react-bootstrap/esm/Col'

const SingleCertificateHome = ({certificate}) => {
    const {icon, title, description} = certificate
  return (
    <Col lg={4} md={6} sm={12}>
        <div className='text-center'>
            <span className='certificate-icon '>{icon}</span>
            <h3 className='text-white'>{title}</h3>
            <p className='text-secondary'>{description}</p>
        </div>
    </Col>
  )
}

export default SingleCertificateHome