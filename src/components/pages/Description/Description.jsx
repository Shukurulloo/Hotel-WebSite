import React from 'react'
import { Desn } from './DescriptionStyle'
import { Title } from '../../styles/homestyles'
import left from '../../assets/Path 36left.png'
import right from '../../assets/Path 36right.png'
import { Buttonstyle } from '../../styles/buttonstyled';

const Testimonials = () => {
  return (
    <Desn>
    <Title wd='309px'>Testimonials</Title>   
    <h3>"Calm, Serene, Retro – What a way to relax and enjoy"</h3>
    <h5>Mr. and Mrs. Baxter, UK</h5>
    <div style={{display:"flex"}}>

    <Buttonstyle wd='50px' ht='50px'>
<img src={left} alt="" />
    </Buttonstyle>
    <Buttonstyle  wd='50px' ht='50px' style={{marginLeft:'20px'}}>
    <img src={right} alt="" />
    </Buttonstyle>
    </div>
    </Desn>



  )
}

export default Testimonials