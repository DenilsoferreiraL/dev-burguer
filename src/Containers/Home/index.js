import React, { useState, useRef } from "react"
import { useNavigate } from 'react-router-dom'
import Logo from "../../assets/logo-burguer.svg"
import axios from "axios"
import H1 from '../../components/Title'
 
import {
    Container,
    ContainerItens,
    Image,
    Label,
    Input,
    Button,

} from "./styles"


function App() {
    const [orderList, setOrderList] = useState([])
    const navigate = useNavigate()
    const inputOrder = useRef()
    const inputClienteName = useRef()


    async function addNewOrder() {
        const { data: newOrder } = await axios.post("http://localhost:3001/order/", {
            order: inputOrder.current.value, clienteName: inputClienteName.current.value
        })
        setOrderList([...orderList, newOrder])

        navigate('/order')
    }



    return (
        <Container>
            <Image alt="logo-imagem" src={Logo} />
            <ContainerItens>
                <H1>Faça seu pedido!</H1>
                <Label>Pedido</Label>
                <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada"></Input>

                <Label>Nome</Label>
                <Input ref={inputClienteName} placeholder="Steve Jobs"></Input>

                <Button onClick={addNewOrder}>Novo Pedido</Button>

            </ContainerItens>
        </Container>

    )
}


export default App

