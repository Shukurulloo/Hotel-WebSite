import React from 'react'
import Navbar from './navbar/navbar'
import { WrapperHome, MiniWrap } from '../styles/homestyles';
import Button from "../pages/Button";
import Footer from "../pages/footer/footer.jsx"

const Home = () => {
  return (
    <WrapperHome>
      <Navbar/>
      <MiniWrap>
          <h3>WELCOME TO</h3>
          <h1>LUXURY</h1>
          <h2>HOTELS</h2>
          <p>Book your stay and enjoy Luxury <br />
            redefined at the most affordable rates.</p>
        </MiniWrap>
        <Button />
        <Footer/>
      </WrapperHome>
  )
}
  

export default Home