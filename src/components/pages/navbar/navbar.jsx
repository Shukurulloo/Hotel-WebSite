import React from 'react'
import { Nav } from './navbarStyle'
import { Div } from './navbarStyle'
import { Logo } from './navbarStyle'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   <Nav>
    <Div left>
      <Logo>
<h1>LUXURY</h1>
<p>HOTELS</p>
      </Logo>
      </Div>
    <Div right="pointer" style={{justifyContent: 'space-between'}}>
    <Link to='/' style={{textDecoration: 'none'}}>
        <div>Home</div>
        </Link>
        <Link to='/facilities' style={{textDecoration: 'none'}}>
        <div>Facilities</div>
        </Link>
        <Link to='/rooms' style={{textDecoration: 'none'}}>
        <div>Rooms</div>
        </Link>
        <Link to='/ContactUs' style={{textDecoration: 'none'}}>
        <div>Contact-us</div>
        </Link>        
    </Div>
   </Nav>
  )
}

export default Navbar