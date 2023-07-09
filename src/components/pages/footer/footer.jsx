import React from 'react'
import { FooterContainer, FooterWrap } from './footerstyle'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
     <FooterWrap left>
     <h1>LUXURY</h1>
     <h5>HOTELS</h5>
     <p>497 Evergreen Rd. Roseville, CA 95673 <br /> 
         +44 345 678 903 <br />
         luxury_hotels@gmail.com</p>
     </FooterWrap>
     <FooterWrap midLeft>
        <div>About Us</div>
        <div style={{margin: "30px 0"}}>Contact</div>
        <div>Terms & Conditions</div>
     </FooterWrap>
     <FooterWrap  midRight>
        <a href="https://facebook.com"><FaFacebook style={{marginRight: "10px"}}/>Facebook</a>
        <a href="https://www.twitter.com" style={{margin: "20px 0px"}}><FaTwitter style={{marginRight: "10px"}}/>Twitter</a>
        <a href="https://instagram.com"><FaInstagram style={{marginRight: "10px"}}/>Instagram</a>
      </FooterWrap >
      <FooterWrap  right>
        <div style={{marginBottom:'20px'}}>Subscribe to our newsletter</div>
        <div style={{display: 'flex', textDecoration:'none'}}>
     
        </div>        
      </FooterWrap >
    </FooterContainer>
  )
}

export default Footer