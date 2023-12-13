import React, { useState } from "react"
import {
    Container,
    ContainerItens,
    Image,
    H1,
    Label,
    Input,
    Button,
    List,
    Div,
    Paragraph
} from "./styles"

import Logo from "./assets/logo-burguer.svg"
import Trash from "./assets/Trash.svg"

function App() {
    const [orderList, setOrderList] = useState([])
    const [clienteName, setClienteName] = useState([])
    const [order, setOrder] = useState([])

    function addNeworder() {

        setOrderList([...orderList, { id: Math.random(), order, clienteName, price: 43, status: "em preparação" }])


    }

    function changeInputOrder(event) {
        setOrder(event.target.value)
    }

    function changeInputCliente(event) {
        setClienteName(event.target.value)
    }


    return (
        <Container>
            <Image alt="logo-imagem" src={Logo} />
            <ContainerItens>
                <H1>Faça seu pedido!</H1>
                <Label>Pedido</Label>
                <Input onChange={changeInputOrder} placeholder="1 Coca-Cola, 1-X Salada"></Input>

                <Label>Nome do Cliente</Label>
                <Input onChange={changeInputCliente} placeholder="Steve Jobs"></Input>

                <Button onClick={addNeworder}>Novo Pedido</Button>

                <ul>
                    {orderList.map((user) => (
                        <List key={orderList.id}>
                            <Div>
                                <p>{user.order} </p>
                                <Paragraph> {user.clienteName} </Paragraph>
                            </Div>
                            <button><img alt="Trash-img" src={Trash} /></button>
                        </List>
                    ))}

                </ul>
            </ContainerItens>
        </Container>

    )
}


export default App

