import react from "react";
import "./card.style.css"
export const Card = (props)=> {
    return(
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id+3}?set=set2&size=180x180`} />   
      <h2>{props.monster.name}</h2>
      <h3>{props.monster.email}</h3>
    </div>
    )
}