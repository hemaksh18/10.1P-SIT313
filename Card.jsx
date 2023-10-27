import React from "react";
import './Card.css'

const Card = (props) => {
    return <div className="column">
        <img src={props.avatar} alt="staff" width={200} height={200}/>
        <br></br>
        <h3>{props.name}</h3>
        <br></br>
        <p>{props.position}</p>
        <br></br>
        <p>{props.rating}</p>
        </div>
}

export default Card;