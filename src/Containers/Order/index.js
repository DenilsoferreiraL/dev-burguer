import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import LogoOder from "../../assets/logo-order.svg"
import Trash from "../../assets/Trash.svg"
import axios from "axios"

import {
    Container,
    ContainerItens,
    Image,
    H1,
    Button,
    List,
    Div,
    Paragraph
} from "./styles"


function Order() {
    const [orderList, setOrderList] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        async function fetchOrder() {
            const { data: newListOrder } = await axios.get("http://localhost:3001/order")

            setOrderList(newListOrder)
        }

        fetchOrder()
    }, [])

    async function deleteOrder(userId) {
        await axios.delete(`http://localhost:3001/order/${userId}`)
        const newOrder = orderList.filter(user => user.id !== userId)

        setOrderList(newOrder)
    }

    function goBackPage() {
        navigate('/')
    }

    return (
        <Container>
            <Image alt="logoOder" src={LogoOder} />
            <ContainerItens>
                <H1>Pedidos</H1>
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

                <Button onClick={goBackPage}>Voltar</Button>


            </ContainerItens>
        </Container>

    )
}


export default Order

