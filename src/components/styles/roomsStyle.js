import styled from 'styled-components';
// import roomsBGimg from '../../images/roomsBGimg.png';
import roomsBackGimg from '../assets/roomsBGimg.png'

export const RoomStyle = styled.div`
background-image:url(${roomsBackGimg});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
width:auto;
height:950px;

`
export const WrepRoom =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 81px;

`
export const Middleroom =styled.div`
justify-content: center;
align-items: center;
display: flex;
background-color: #14274A;
width: 1460px;
height: 141px;
border: 1px solid blue;


h1{
color: #FFF;
font-family: 'Montserrat', sans-serif;
font-size: 55px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

`

export const WrapButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid black;
width: 1460px;
height: 235px;
border-radius: 0px 0px 13px 13px;
div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}

h3{
color: #14274A;
text-align: center;
font-family: 'Montserrat', sans-serif;
font-size: 23px;
font-style: normal;
font-weight: 630;
line-height: normal;
padding: 0px 70px 0px 15px;
}
`