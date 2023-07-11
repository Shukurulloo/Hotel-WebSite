import React from 'react'
import Navbar from './navbar/navbar'
import { RoomStyle } from '../styles/roomsStyle'
import Footer from './footer/footer'
import { MiniWrap, Text, Title } from '../styles/homestyles'
import Button from './Button'
import Testimonials from './Description/Description'
import { FirstMiddle } from '../styles/facilities'


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
        <FirstMiddle>
        <Title>
          FACILITIES
          </Title>
          <Text wd='80%' style={{}}>
          We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so
          that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
          and our modern luxury resort facilities will help you enjoy the best of all. 
          </Text>
        </FirstMiddle>
        <Testimonials/>
       <Footer/>
    </RoomStyle>
  )
}

export default Rooms