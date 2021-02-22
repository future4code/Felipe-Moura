import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginCreate from './Components/Login/LoginCreate'
import LoginForm from './Components/Login/LoginForm'

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login">
                        <LoginForm />
                    </Route>
                    <Route exact path="/create">
                        <LoginCreate />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
