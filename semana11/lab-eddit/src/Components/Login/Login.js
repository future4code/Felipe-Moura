import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'

export const Login = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <LoginForm />
                </Route>
                <Route exact path="/create">
                    <LoginCreate />
                </Route>
            </Switch>
        </div>
    )
}
