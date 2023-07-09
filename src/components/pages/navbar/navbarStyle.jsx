import styled from 'styled-components';
import logoyellow from '..//../assets/LogoRectangle.png'

export const Nav = styled.div`
    
    display: flex;
    /* border: 1px solid black; */
    padding: 0 150px;

    /* @media (max-width: 768px) {
    flex-direction: column;
    
} */
`

export const Div = styled.div`
display: flex;
align-items: center;
flex: 1;
cursor: ${({right})=>right};


div{
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;    
    font-weight: 700;
    line-height: normal;

    &:hover {
    text-decoration: ${props=>props.right ? "underline" : ""};
    }
} 
`

export const Logo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image:url(${logoyellow});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 256px;
height: 149px;

h1{
    color: #14274A;
    font-family: 'Cormorant Garamond', serif;
    font-size: 40px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 6px;
}

p{
    color: #14274A;
    font-family: 'Cormorant Garamond', serif;
    font-size: 15px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 9px;
}
    
`