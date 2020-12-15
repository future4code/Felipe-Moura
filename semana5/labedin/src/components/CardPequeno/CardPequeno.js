import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
  return(
    <div className="smallCard-container">
      <div className="adress">
        <p>{props.cidade}</p>
        <p>{props.estado}</p>
      </div>
      <div className="contact">
      <p>{props.tel}</p>
      <p>{props.email}</p>

      </div>


    </div>
  )

}

export default CardPequeno 