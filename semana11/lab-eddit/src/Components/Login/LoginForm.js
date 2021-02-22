import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import {goToCreatePage} from '../../Coordinator'
import axios from 'axios'

function LoginForm() {
    const email = useForm()
    const password = useForm()
    const history = useHistory()

    const handleSubmit = () => {
        const body ={
            email: email.value,
            password: password.value

        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login", body).then(res =>{
            console.log(res)
        }).catch(err =>{
            console.log(err)
        })
    }


    return (
        <div>
            <h1>Login</h1>
            <Input label="Email" type="email" name="email"{...email} />
            <Input label="senha" type="password" name="password" {...password} />
            <Button onClick={handleSubmit}>Entrar</Button>
            <Button onClick={() => goToCreatePage(history)}>Cadastra-se</Button>
        </div>
    )
}

export default LoginForm
