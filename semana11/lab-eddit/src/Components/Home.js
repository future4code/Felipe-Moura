import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { goToFeedPage, goToLoginPage } from '../Coordinator'
import { UserContext } from '../UserContext'

function Home() {
    const {data} = useContext(UserContext)

    const history = useHistory()

    // useEffect(() =>{
    //     autoLogin()
    // },[autoLogin])
    return (
        <div>
            {data ? goToFeedPage(history): goToLoginPage(history) }
        </div>
    )
}

export default Home
