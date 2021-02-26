export const goToCreatePage = (history) => {
    history.push('/create')
}

export const goToFeedPage = (history) =>{
    history.push('/feed')
}
export const goToHome = (history) =>{
    history.push('/')
}

export const goToLoginPage = (history)=>{
    history.push('/login')
}

export const goToPostDetailPage = (history,id ) =>{
    history.push(`/postDetail/${id}`)
}