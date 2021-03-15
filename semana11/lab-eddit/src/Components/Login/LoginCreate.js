import axios from 'axios'
import React from 'react'
import Input from '../../Components/Forms/Input'
import useForm from '../../hooks/useForm'
import Button from '../Forms/Button'

const LoginCreate = () => {
    const userName = useForm()
    const email = useForm()
    const password = useForm()
    
    const handleSubmit = (event) =>{
        const body = {
            email: email.value,
            password: password.value,
            username: userName.value

        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup',body
            
        ).then((res) =>{
            console.log(res)
        }).catch(err =>{
            console.log(err)
        })
    }

    return (
        <div>
            <h2>Cadastra-se</h2>
            <Input label="Username" type="text" name="username" {...userName} />
            <Input label="Email" type="email" name="email" {...email}/>
            <Input label="Senha" type="password" name="password" {...password} />

            <Button onClick={handleSubmit}>Cadastrar</Button>
        </div>
    )
}

export default LoginCreate
