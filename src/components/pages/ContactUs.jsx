import React from 'react'
import Navbar from './navbar/navbar'
import { ContactStyle, WrapForm } from '../styles/ContactStytle'
import Footer from './footer/footer'


const ContactUs = () => {
  return (
    <ContactStyle> <Navbar/>
    <h3>CONTACT-US </h3>
    <WrapForm>
          <h5>WE ARE HERE FOR YOU</h5>          
          <p style={{fontSize:''}}> 
            At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, <br/>
            please forward it to our support desk and we will get back to you as soon as possible.
          </p>
        </WrapForm>
    <Footer/>
    </ContactStyle>
  )
}

export default ContactUs