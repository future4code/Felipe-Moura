import React, { useContext, useEffect } from 'react'
import { UserContext } from '../UserContext'

function Home() {
    const {autoLogin} = useContext(UserContext)

    // useEffect(() =>{
    //     autoLogin()
    // },[autoLogin])
    return (
        <div>
            Home
        </div>
    )
}

export default Home
