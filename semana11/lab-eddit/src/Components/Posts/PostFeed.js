import React from 'react'
import { ContainerPost } from './PostFeedStyles'

const PostFeed = ({text, title}) => {
 
   
    return (
        <ContainerPost>
            <h2>{title}</h2>
            <p>{text}</p>
        </ContainerPost>
    )
}

export default PostFeed
