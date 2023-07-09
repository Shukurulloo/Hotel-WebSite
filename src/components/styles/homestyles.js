import styled from 'styled-components'
import homeBackGround from './../assets/homeBackGroud.png'

export const WrapperHome = styled.div`
background-image:url(${homeBackGround});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
width:auto;
height:950px;
`


export const MiniWrap= styled.div`
display:flex;
flex-direction: column;
color: #FFF;
padding-left: 150px;
padding-top: 193px;

h3{    
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;    
    font-weight: 400;
    line-height: normal;
}

h1{    
    font-family: 'Cormorant Garamond', serif;
    font-size: 154px;    
    font-weight: 700;
    line-height: normal;
    letter-spacing: 10.78px;
}

h2{    
    font-family: 'Cormorant Garamond', serif;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 24px;
}

p{
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.5px;
    animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
`