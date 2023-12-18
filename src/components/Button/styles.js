import styled from "styled-components";

export const Button = styled.button`
display: flex;
margin-top: 50px;
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