import styled from 'styled-components';

export const ContactStyle = styled.div`
background-color:#14274A;
height: 465px;

h3{
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 80px;    
    font-weight: 700;
    line-height: normal;
    text-align: center;
    padding-top: 80px;
}

`
export const WrapForm = styled.div`
display: flex;
 flex-Direction:column;
 text-Align:left;
 width: 100%;
 height:590px;
 justify-content: center;

h5{
    color: #14274A;
    font-family: 'Cormorant Garamond', serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 150px;
    margin-left:80px;
}
p{
    color: #14274A;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left:80px;
}
`
export const ContainerUs = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
height: 1200px;
width: 100%;

`
export const Address = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
flex: 1;
padding-left: 80px;
/* margin-bottom:380px; */

div{
    display: flex;
    padding: 20px 0px 40px 0px;
}
p{
    color: #14274A;
    font-family: 'Montserrat', sans-serif;
font-size: 34px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 520px;
}
h5{
color: #14274A;
font-family: 'Montserrat', sans-serif;
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-right: 34px;
}
`

export const WrapInput = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
flex: 1;
/* margin-bottom:280px; */
input{
    width: 570px;
height: 78px;
flex-shrink: 0;
border: 2px solid rgba(20, 39, 74, 0.50);
background: #FFF;
margin-bottom: 45px;
}
h6{
color: #14274A;
font-family: Arial;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;

}
div{
    display: flex;
    flex-direction: column;
    align-items: end;
}
`
