import Navbar from './navbar/navbar'
import React from 'react'
import { FacilityStyle } from '../styles/facilities'
import Footer from './footer/footer'
import { MiniWrap } from '../styles/homestyles'
import Button from './Button'


const Facilities = () => {
  return (
    <FacilityStyle >
      <Navbar/>
      <MiniWrap>
          <h3>WELCOME TO</h3>
          <h1>LUXURY</h1>
          <h2>HOTELS</h2>
          <p>Book your stay and enjoy Luxury <br />
            redefined at the most affordable rates.</p>
        </MiniWrap>
        <Button/>
      <Footer/>
    </FacilityStyle >
  )
}

export default Facilities