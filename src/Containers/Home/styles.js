import styled from "styled-components"


export const Container = styled.div`
background-color: black;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
min-height: 100vh;
padding: 15px;
`
export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const Image = styled.img`
max-width:342px;
width: 100%;
height: auto;
cursor: pointer;
`

export const Label = styled.label`
color:#eee;
font-style: normal;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.408px;
margin-left: 20px;
`

export const Input = styled.input`
display: flex;
margin-bottom: 65px;
padding: 19px 139px 18px 15px;
align-items: center;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
color: #eee;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;
`

export const ErrorParagraph = styled.p `
display: flex;
justify-content: center;
font-size: 18px;
color: #ffffff;

`

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
max-width: 350px;
width: 100%;
height: 68px;
padding: 0px 113px;
background: #8A2BE2;
border-radius: 14px;
font-size: 17px;
font-style: normal;
font-weight: 900;
line-height: 2.5px;
color: #FFF;
cursor: pointer;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease 0s;

&:hover{
    background-color:#FF00FF ;
    box-shadow: 0px 15px 20px #A020F0;
    color: #eee;
    transform: translateY(-5px);
}

&:active{
    opacity: 0.6;
}
`


