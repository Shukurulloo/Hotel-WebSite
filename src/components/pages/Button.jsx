import React from 'react'
import { Buttonstyle } from '../styles/buttonstyled'
import homeicon from "../assets/houseIcon.png"

const Button = () => {
  return (
    <Buttonstyle style={{margin:"50px 700px"}}> <img src={homeicon} alt="" style={{marginRight:"10px"}} /> BOOK NOW</Buttonstyle>
  )
}

export default Button