import styled from "styled-components";

export const FooterContainer = styled.div`
padding: 0 150px;
display: flex;
align-items: center;
background-color: #14274A;
height: 310px;
position: relative;
width: 100%;
display: flex;
      align-items: center;
      justify-content: center;

&:before {
      border-bottom: 105px solid  #14274A;
      border-left: 130px solid transparent;
      border-right: 130px solid transparent;
      content: "";
      height: 0px;
      /* left:710px; */
      position: absolute;
      top: -75px;
      width: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

`
// export const Corner = styled.div`
// `
export const FooterWrap = styled.div`
display: flex;
flex-direction: column;
color: #FFF;
flex: 1;

h1{    
    font-family: 'Cormorant Garamond', serif;
    font-size: 25px;    
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.75px;
}

h5{
    font-family: 'Cormorant Garamond', serif;
    font-size: 9px;    
    font-weight: 700;
    line-height: normal;
    letter-spacing: 5.4px;
    margin: 5px 0 20px;
    padding-left: 30px;
}

p{
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;    
    font-weight: 400;
    line-height: normal;
}

div{
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;

    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}

a{
    color: #F7F7F7;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;    
    font-weight: 400;
    line-height: 194.9%;
    text-decoration: none;
    display: flex;
    align-items: center;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }   
}
input{
    width: 280px;
    height: 52px;
    padding-left: 10px;
    border: 2px solid #E0B973;
    border-radius: 5px 0px 0px 5px;
    background-color: #14274A;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    line-height: 19.5px;
    font-weight: 500;
    color: #FFF;cursor: pointer;
}
input::placeholder {
  color: #ffffff;
}
button{
 background-color: #E0B973;
 font-family: 'Montserrat', sans-serif;
 line-height: 19.5px;
    font-size: 15px;
    font-weight: 500;
    width:80px;
    height: 52px;
    border-radius: 0px 5px 5px 0px  ;
    margin-left: -3px;
    border: none;
    cursor: pointer;
 &:hover {
    background-color: #FFD700;
    
}
}
`

