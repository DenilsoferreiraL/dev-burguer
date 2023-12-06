import React from "react"
import {
    Container,
    ContainerItens,
    Image,
    H1,
    Label,
    Input,
    Button

} from "./styles"

import logo from "./assets/logo-burguer.svg"

function App() {

    return (
        <Container>
            <Image alt="logo-imagem" src={logo} />
            <ContainerItens>

                <H1>Faça seu pedido!</H1>
                <Label>Pedido</Label>
                <Input></Input>

                <Label>Nome do Cliente</Label>
                <Input></Input>

                <Button>Novo Pedido</Button>
            </ContainerItens>
        </Container>

    )
}


export default App