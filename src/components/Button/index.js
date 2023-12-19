import React from 'react'
import { Button as ContaienrButton } from './styles'

function Button({ children, ...props }) {

    return <ContaienrButton {...props }>{children}</ContaienrButton>
}

export default Button