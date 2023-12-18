import React from 'react'
import { Button } from './styles'

function button(props) {

    return <Button>{props.children}</Button>
}

export default button