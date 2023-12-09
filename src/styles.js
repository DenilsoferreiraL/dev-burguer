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

`

export const Image = styled.img`
max-width:342px;
width: 100%;
height: auto;
cursor: pointer;
`

export const H1 = styled.p`
display: flex;
justify-content:center ;
align-items: center;
font-size: 28px;
font-weight: 700;
color: #eee;
padding: 40px;
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

export const Button = styled.button`
display: flex;
margin:0 0 0 5px;
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

export const Div = styled.div`
display: flex;
flex-direction: column;
color:#ffffff;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;

`

export const Paragraph = styled.p`
color: #fff;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-top: 25px;
`

export const List = styled.li`
display: flex;
margin-top: 20px;
padding: 10px;
justify-content: center;
 align-items: center;
max-width: 410px;
width: 100%;
height: auto;
flex-shrink: 0;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
justify-content: space-around;


& button{
display: flex;
width: 28px;
height: 24px;
background: transparent;
border: none;
align-items: center;
}
`

