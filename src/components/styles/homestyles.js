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
export const Wrappertypes = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
h2{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    size: 36px;
    line-height: 43.88px;
    color: #14274A;
}

`

export const Middle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 579px;
`
export const MiniMiddle = styled.div`
display: flex;
flex-direction: column;
/* width: 542px; */
padding:40px 30px;
`
export const Title = styled.div`
font-size: 60px;
font-family: 'Cormorant Garamond', serif;
font-weight: 800;
letter-spacing: 2%;
color: #14274A;
width: ${({wd}) => wd || '563px'};
`
export const Text = styled.div`
font-family: 'Montserrat', sans-serif;
font-size: 25px;
font-weight: 400;
line-height: 40px;
width: ${({wd}) => wd || '550px'};

`
export const MiddleImg = styled.div`
display: flex;
img{
    width: 700px;
}
`