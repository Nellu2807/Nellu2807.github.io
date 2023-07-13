import {get} from "../utilidades/clienteAPI.js"
import { useState, useEffect } from "react"
import { PersonajesCard } from "./PersonajesCard"
import "./GrillaPersonajes.css"

export const GrillaPersonajes=()=>{

const [personajes,setPersonajes] = useState([])
   
useEffect(()=>{
get("").then((data)=>{
    setPersonajes(data.results);
})
},[])

return(
    <ul className="personajesGrid">
        {personajes.map((personaje)=>(
        <PersonajesCard key={personaje.id} personaje={personaje}/>
        ))}
    </ul>
)
}