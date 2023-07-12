import React from 'react'
import Navbar from './navbar/navbar'
import { WrapperHome, MiniWrap, Wrappertypes, Middle, MiniMiddle, Text, Title, MiddleImg } from '../styles/homestyles';
import Button from "../pages/Button";
import Footer from "../pages/footer/footer.jsx"
import { Buttonstyle } from '../styles/buttonstyled';
import room from '../assets/luxuryRedifined.png'
import beach from '../assets/sandBeach.png'
import Testimonials from './Description/Description';
import IconScroll from './scroll';


const Home = () => {
  return (
    <WrapperHome>
      <Navbar/>
      <MiniWrap style={{margintop:'-50px'}}>
          <h3>WELCOME TO</h3>
          <h1>LUXURY</h1>
          <h2>HOTELS</h2>
          <p>Book your stay and enjoy Luxury <br />
            redefined at the most affordable rates.</p>
        </MiniWrap>
        <Button/>
        <IconScroll/>
        
        <Wrappertypes>
          <h2>All our room types are including complementary breakfast</h2>
          <Middle>
        <div style={{border:"1px solid black",height:"320px", marginRight:"20px"}}></div>
            <MiniMiddle>
              <Title wd='408px' >Luxury redefined</Title>
              <Text style={{marginTop:"20px"}}>Our rooms are designed to transport
                  you into an environment made for leisure.
                  Take your mind off the day-to-day of home 
                  life and find a private paradise for yourself.</Text>
              <Buttonstyle style={{marginTop:"30px"}} wd='236px' ht='63px'>EXPLORE</Buttonstyle>
            </MiniMiddle>
            <MiddleImg>
              <img src={room} alt="" />
            </MiddleImg>
          </Middle>
          
          <Middle>
        <div style={{border:"1px solid black",height:"389px", marginRight:"20px"}}></div>
            <MiniMiddle>
              <Title>Leave your worries in the sand</Title>
              <Text style={{marginTop:"20px"}}>We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean.</Text>
              <Buttonstyle style={{marginTop:"30px"}} wd='236px' ht='63px'>EXPLORE</Buttonstyle>
            </MiniMiddle>
            <MiddleImg>
              <img src={beach} alt="" />
            </MiddleImg>
          </Middle>

        </Wrappertypes>

        <Testimonials/>

        <Footer/>

      </WrapperHome>
  )
}
  

export default Home