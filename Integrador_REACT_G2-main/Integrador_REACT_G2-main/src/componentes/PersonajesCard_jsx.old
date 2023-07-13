import {Link} from "react-router-dom"

import "./PersonajesCard.css"
export const PersonajesCard = ({personaje}) => {

    const imgURL= `${personaje.image}`

  return (
    
    <li className="personajesCard">
      <Link to={`/personaje/${personaje.id}`}>
      <img className="characterImage" src={imgURL} alt={personaje.name} />
      <div>{personaje.name}</div>
      </Link>
    </li>
  );
};
