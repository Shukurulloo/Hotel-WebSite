import React from 'react'
import Navbar from './navbar/navbar'
import { Address, ContactStyle, ContainerUs, WrapForm, WrapInput } from '../styles/ContactUstytle'
import Footer from './footer/footer'
import iconright from '../assets/Arrow 1right-icon.png'
import { Buttonstyle } from '../styles/buttonstyled'

const ContactUs = () => {
  return (
    <ContactStyle>
      <Navbar/>
    <h3>CONTACT-US </h3>
    <WrapForm>
          <h5>WE ARE HERE FOR YOU</h5>          
          <p style={{fontSize:''}}> 
            At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, <br/>
            please forward it to our support desk and we will get back to you as soon as possible.
          </p>
        </WrapForm>
        <ContainerUs>
          <Address>
            <p>497 Evergreen Rd. Roseville, CA 95673</p>
            <div><h5>View map</h5> <img src={iconright} alt="" /></div>
            <p>Phone: +44 345 678 903Email: luxury_hotels@gmail.com</p>
            </Address>

          <WrapInput><h6>Name</h6>
            <input type="text" />
            <h6>Email Address</h6>
            <input type="text" />
            <h6>Message</h6>
            <div><input type="comment" style={{width:'570px',height:'352px'}}/>
            <Buttonstyle wd='145px' ht='78px'>Submit</Buttonstyle></div>
          </WrapInput>
        </ContainerUs>
    <Footer/>
    </ContactStyle>
  )
}

export default ContactUs