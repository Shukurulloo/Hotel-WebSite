import React from 'react'
import Navbar from './navbar/navbar'
import { RoomStyle } from '../styles/roomsStyle'
import Footer from './footer/footer'
import { MiniWrap } from '../styles/homestyles'
import Button from './Button'
import Testimonials from './Description/Description'


const Rooms = () => {
  return (
    <RoomStyle> 
      <Navbar/>
        <MiniWrap>
          <h3>WELCOME TO</h3>
          <h1>LUXURY</h1>
          <h2>HOTELS</h2>
          <p>Book your stay and enjoy Luxury <br />
            redefined at the most affordable rates.</p>
        </MiniWrap>
        <Button/>
        <Testimonials/>
       <Footer/>
    </RoomStyle>
  )
}

export default Rooms