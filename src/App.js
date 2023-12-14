import React, { useState, useRef } from "react"


import Logo from "./assets/logo-burguer.svg"
import Trash from "./assets/Trash.svg"
import axios from "axios"

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


function App() {
    const [orderList, setOrderList] = useState([])
    const inputOrder = useRef()
    const inputClienteName = useRef()


    async function addNewOrder() {
        const response = await axios.post("http://localhost:3001/order", {
            order: inputOrder.current.value, clienteName: inputClienteName.current.value
        })

        console.log(response.data)
    }

        // setOrderList([...orderList, { id: Math.random(), 
        // order: inputOrder.current.value, 
        // clienteName: inputClienteName.current.value,
        //  price: 43, status: "em preparação" }])

    function deleteOrder(userId) {
        const newOrder = orderList.filter(user => user.id !== userId)

        setOrderList(newOrder)
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

                <ul>
                    {orderList.map((user) => (
                        <List key={orderList.id}>
                            <Div>
                                <p>{user.order} </p>
                                <Paragraph> {user.clienteName} </Paragraph>
                            </Div>
                            <button onClick={() => deleteOrder(user.id)}>
                                <img alt="Trash-img" src={Trash} />
                            </button>
                        </List>
                    ))}

                </ul>
            </ContainerItens>
        </Container>

    )
}


export default App

