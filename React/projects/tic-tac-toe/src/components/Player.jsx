import { useState } from "react"
export default function Player({name,symbol})
{
   const [isEditing, setIsEditing] = useState(false);
   let playerName = !isEditing ?  <span className = "player-name">{name} </span> : <input type="text" value = {name} required/>
   let btnCaption = isEditing ? "Save" : "Edit";

   function handleEditClick()
   {
     setIsEditing((isEditing) => isEditing);
   }
  return (
    <li>
        <span className = "player">
            {playerName}
            <span className = "player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  )
}