import styled from 'styled-components'

export const ScrollStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1{
    color: #FFF;
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.25px;
    margin-bottom: 5px;
    margin-top:-30px;
}
img{
    margin-bottom:80px;
    width: 40px;
height: 40px;
border-radius: 30px;
&:hover{
        cursor: pointer;
        border: 3px solid #14274A ;
    }
}
`
