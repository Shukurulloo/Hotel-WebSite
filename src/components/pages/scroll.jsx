import React from 'react'
import { ScrollIcon, ScrollStyle } from '../styles/scrollStyle'
import scrol from "../assets/scrollDown.png"

const IconScroll= () => {
  return (
    <ScrollStyle>
        <h1>SCROLL</h1>
              <ScrollIcon src={scrol} alt="" />
    </ScrollStyle>
  )
}

export default IconScroll