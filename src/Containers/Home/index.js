import React, { useState, useRef } from "react"
import { useNavigate } from 'react-router-dom'

import Logo from "../../assets/logo-burguer.svg"

import axios from "axios"

import H1 from '../../components/Title'
import Button from "../../components/Button"

import {
    Container,
    ContainerItens,
    Image,
    Label,
    Input,
    ErrorParagraph
} from "./styles"


function App() {
    const [orderList, setOrderList] = useState([])
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const inputOrder = useRef()
    const inputClienteName = useRef()


    async function addNewOrder() {
        if (!inputOrder.current.value || !inputClienteName.current.value) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const { data: newOrder } = await axios.post("http://localhost:3001/order", {
                order: inputOrder.current.value,
                clienteName: inputClienteName.current.value
            });

            setOrderList([...orderList, newOrder]);

            navigate('/order')
        } catch (error) {
            console.error('Erro ao adicionar novo usuário:', error);
            setError('Erro ao adicionar novo usuário. Por favor, tente novamente.');
        }
    }



    return (
        <Container>
            <Image alt="logo-imagem" src={Logo} />
            <ContainerItens>
                <H1>Faça seu pedido!</H1>
                <Label>Pedido</Label>
                <Input ref={inputOrder} placeholder="Insira seu pedido"></Input>

                <Label>Nome</Label>
                <Input ref={inputClienteName} placeholder="Insira seu nome"></Input>

                {error && <ErrorParagraph>{error}</ErrorParagraph>}

                <Button onClick={addNewOrder}>Novo Pedido</Button>

            </ContainerItens>
        </Container>

    )
}


export default App

