import {useState, useEffect} from 'react'
import axios from "axios"

export function useRequestData(url, inicialState){
    const [data, setData] = useState(inicialState)

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            
            setData(res.data.trips)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[url])

    return data
}

