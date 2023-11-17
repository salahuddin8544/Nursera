import React from 'react'
import { Outlet}from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'

export const Main = () => {
  return (
    <div>
      <Header/>
        <Outlet></Outlet>
        <Footer/>
    </div>
  )
}
