import React from 'react'
import HomeBanner from './HomeBanner'
import CertificateHome from './CertificateHome'
import CaringHome from './CaringHome'
import OurSuccessHome from './OurSuccessHome'
import HomeCounting from './HomeCounting'
import MakeAppoinment from '../../Components/MakeAppoinment/MakeAppoinment'
const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <CertificateHome/>
      <CaringHome/>
      <OurSuccessHome/>
      <HomeCounting/>
      <MakeAppoinment/>
    </div>
  )
}

export default Home