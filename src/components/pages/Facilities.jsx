import Navbar from './navbar/navbar'
import React from 'react'
import { FacilityStyle, FirstMiddle, Induction, WrepImg } from '../styles/facilities'
import Footer from './footer/footer'
import {MiniWrap, Text, Title } from '../styles/homestyles'
import Button from './Button'
import Testimonials from './Description/Description'
import gym from '../assets/gym.png'
import bar from '../assets/PoolsidBars.png'
import swiming from '../assets/swimmingpool.png'
import restourant from '../assets/restaurant.png'
import laundry from '../assets/laundry.png'
import IconScroll from './scroll'

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
        <IconScroll/>
        <FirstMiddle>
          <Title>
          FACILITIES
          </Title>
          <Text txtalg='center' wd='1440px'>
          We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so
          that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
          and our modern luxury resort facilities will help you enjoy the best of all. 
          </Text>
        </FirstMiddle>
        <WrepImg>
          <img src={gym} alt="" />
          <div><Induction>THE GYM</Induction></div>
        </WrepImg>
        <WrepImg>
          <img src={bar} alt="" />
          <div><Induction>POOLSIDE BAR</Induction></div>
        </WrepImg>
        <WrepImg>
          <img src={swiming} alt="" />
          <div><Induction>SWIMMING POOL</Induction></div>
        </WrepImg>
        <WrepImg>
          <img src={restourant} alt="" />
          <div><Induction>RESTAURANT</Induction></div>
        </WrepImg>
        <WrepImg>
          <img src={laundry} alt="" />
          <div><Induction>LAUNDRY</Induction></div>
        </WrepImg>
        <Testimonials/>
      <Footer/>
    </FacilityStyle >
  )
}

export default Facilities