import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import {goToCreatePage} from '../../Coordinator'

function LoginForm() {
    const email = useForm()
    const password = useForm()
    const history = useHistory()


    return (
        <div>
            <h1>Login</h1>
            <Input label="Email" type="email" name="email"{...email} />
            <Input label="senha" type="password" name="password" {...password} />
            <Button>Entrar</Button>
            <Button onClick={() => goToCreatePage(history)}>Cadastra-se</Button>
        </div>
    )
}

export default LoginForm
