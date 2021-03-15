import React from 'react'
import { ButtonStyle } from './ButtonStyles'

function Button({children, ...props}) {
    return (
        <ButtonStyle {...props}>
            {children}
        </ButtonStyle>
    )
}

export default Button
