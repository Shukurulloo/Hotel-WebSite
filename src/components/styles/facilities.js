import styled from 'styled-components'

import facilitiesBackGr from '../assets/facilitiesBGimg.png'
// import facilitiesBGimg from '../../images/facilitiesBGimg.png';

export const FacilityStyle = styled.div`
background-image:url(${facilitiesBackGr});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
width:auto;
height:950px;
/* display: flex;
align-items: center;
justify-content: center;
flex-direction: column; */

`
export const FirstMiddle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 420px;

`

export const WrepImg = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
div{
width: 684px;
height: 75px;
background-color: white;
justify-content: center;
align-items: center;
display: flex;
margin-top: -30px;
margin-bottom: 70px;
}
img{
    width: 1460px;
}
`


export const Induction = styled.div`
font-family: 'Montserrat', sans-serif;
color: #14274A;
font-size: 48px;
line-height: 55.51px;
font-weight: 700;
text-align: center;
`