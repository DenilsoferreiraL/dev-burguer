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
    const  [orderList, setOrderList ] = useState([])
    // { id: Math.random(), order: "1 Batata Grande, 1 X-Bacon, 2 Coca-Colas Light ", clienteName: "Denilso ", price: 43, status: "em preparação" }
    function addneworder() {
        setOrderList([{ id: Math.random(), order: "1 Batata Grande, 1 X-Bacon, 2 Coca-Colas Light ", clienteName: "Denilso ", price: 43, status: "em preparação" }])


    }
    return (
        <Container>
            <Image alt="logo-imagem" src={Logo} />
            <ContainerItens>
                <H1>Faça seu pedido!</H1>
                <Label>Pedido</Label>
                <Input placeholder="1 Coca-Cola, 1-X Salada"></Input>

                <Label>Nome do Cliente</Label>
                <Input placeholder="Steve Jobs"></Input>

                <Button onClick={addneworder}>Novo Pedido</Button>

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

