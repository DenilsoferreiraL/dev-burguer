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
max-width:246px;
width: 100%;
height: auto;
cursor: pointer;
`

export const Div = styled.div`
display: flex;
margin-right: 20px;
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
cursor: pointer;
}
`

