import React from 'react'
import Navbar from './navbar/navbar'
import { Middleroom, RoomStyle, WrapButton, WrepRoom } from '../styles/roomsStyle'
import Footer from './footer/footer'
import { MiniWrap, Text, Title } from '../styles/homestyles'
import Button from './Button'
import Testimonials from './Description/Description'
import { FirstMiddle } from '../styles/facilities'
import IconScroll from './scroll'
import singlerom from '../assets/singleroom.png'
import radio from '../assets/Group 65radio.png'
import plus from '../assets/Group 58plusButon.png'
import { Buttonstyle } from '../styles/buttonstyled'
import doubleroom from '../assets/doubleroom.png'
import twinroom from'../assets/twinroom.png'


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
        <IconScroll/>
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
        <WrepRoom>
          <img src={singlerom} alt="" style={{width:'1460px'}} />
          <img src={radio} alt="" style={{width:'100px',marginTop:"-170px",marginBottom:'80px'}}/>
          <Middleroom><h1>SINGLE ROOM</h1></Middleroom>
        </WrepRoom>
        <WrapButton style={{marginLeft:'110px'}}>
            <div>
              <img src={plus} alt="" />
          <h3>VIEW ROOM DETAILS</h3>
          </div>
          <div><Buttonstyle>$155  Avg/night</Buttonstyle></div>
          </WrapButton>

        <WrepRoom >
          <img src={doubleroom} alt="" style={{width:'1460px'}} />
          <img src={radio} alt="" style={{width:'100px',marginTop:"-170px",marginBottom:'80px'}}/>
          <Middleroom><h1>DOUBLE ROOM</h1></Middleroom>
          <WrapButton>
            <div>
              <img src={plus} alt="" />
          <h3>VIEW ROOM DETAILS</h3>
          </div>
          <div><Buttonstyle>$155  Avg/night</Buttonstyle></div>
          </WrapButton>
        </WrepRoom>

        <WrepRoom >
          <img src={twinroom} alt="" style={{width:'1460px'}} />
          <img src={radio} alt="" style={{width:'100px',marginTop:"-170px",marginBottom:'80px'}}/>
          <Middleroom><h1>TWIN ROOM</h1></Middleroom>
          <WrapButton>
            <div>
              <img src={plus} alt="" />
          <h3>VIEW ROOM DETAILS</h3>
          </div>
          <div><Buttonstyle>$155  Avg/night</Buttonstyle></div>
          </WrapButton>
        </WrepRoom>
        <Testimonials/>
       <Footer/>
    </RoomStyle>
  )
}

export default Rooms