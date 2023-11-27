import React from 'react'
import { BsCurrencyDollar, BsHandThumbsUp, BsPersonFill } from 'react-icons/bs'
import SingleCertificateHome from './SingleCertificateHome'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/esm/Container'

const CertificateHome = () => {
    const certificates = [
        {
            icon: <BsHandThumbsUp />,
            title: 'Satisfaction Guarantee',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
        },
        {
            icon: <BsPersonFill />,
            title: 'Satisfaction Guarantee',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
        },
        {
            icon: <BsCurrencyDollar />,
            title: 'Satisfaction Guarantee',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
        },
    ]
  return (
    <div className='mx-auto py-4 certificate'>
        <Container>
            <Row>
            {
                certificates.map((certificate, id) =>{
                    return <SingleCertificateHome
                    key={id}
                    certificate={certificate}
                    />
                } )
            }
            </Row>
        </Container>
    </div>
  )
}

export default CertificateHome