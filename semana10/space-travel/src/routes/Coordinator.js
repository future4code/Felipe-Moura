
export const goToListTrip = (history) =>{
 
    history.push("/list")
}

export const goToHome = (history) =>{
    history.push("/")
}

export const goToLogin = (history) =>{
    history.push("/login")
}

export const goToDetails = (history) =>{
    history.push("/details")
}

export const goToApplication = (history, id) =>{
    if(id !== null){
        history.push(`/application/${id}`)
    }
}

export const goToAdmListTrip = (history) =>{
    history.push("/admlisttrip")

}

export const goToApplicationPeople = (history, id) =>{
    history.push(`/peopleaplication/${id}`)
}

export const goToBack = (history) =>{
    history.goBack()
}

export const goToCreatePage = (history) =>{
    history.push("/createtrip")
}