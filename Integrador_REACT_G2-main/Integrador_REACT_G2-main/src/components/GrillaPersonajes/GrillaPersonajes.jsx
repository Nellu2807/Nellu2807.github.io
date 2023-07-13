import { get } from "../../utilidades/clienteAPI";
import { useState, useEffect } from "react";
import { PersonajesCard } from "../PersonajesCard/PersonajesCard.jsx";
import "./GrillaPersonajes.css";
import {
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";
import { Spin } from "../../componentes/spinner";

export const GrillaPersonajes = () => {
  const [loading, setLoading] = useState(true);
  const [personajes, setPersonajes] = useState([]);
  const [personajesAPI, setPersonajesAPI] = useState([]);

  const personajesCollection = collection(db, "RaM");

  const llenarColeccion = async () => {
    const data = await getDocs(personajesCollection);
    if (data.length !== 0) {
      setLoading(false);

      setPersonajes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("Lei coleccion en principal");
      console.log("El largo de la coleccion leida es: " + personajes.length);
    } else {
      setLoading(true);
      console.log('Loading en true')
    }
  };

  const crearDato = async () => {
    await get("").then((data) => {
      setPersonajesAPI(data.results);
  
      console.log(data.results);
      console.log(data.info);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      llenarColeccion();
    }, 1000);

    if (personajes.length === 0) {
      console.log("La coleccion estaba vacia");
      crearDato();

      console.log("Lei la API con: " + personajesAPI.length + " personajes");

      personajesAPI.forEach((misPersonas) => {
        subirPersonaje(misPersonas);
      });

    }
  }, []);


  const subirPersonaje = async (misPersonas) => {

    await setDoc(doc(db, "RaM", String(misPersonas.id)), {
      name: misPersonas.name,
      origin: misPersonas.origin.name,
      location: misPersonas.location.name,
      image: misPersonas.image,
      gender: misPersonas.gender,
    })
      .then(() => {
        console.log("Guarde en Firestore el ID:" + misPersonas.id);
      })
      .catch((error) => {
        console.log("Error guardando: " + error);
      });
  };


  if (loading) {
    return (
      <>
        <Spin />
      </>
    )
  } else {
    return (
      <ul className="personajesGrid">
        {personajes.map((personaje) => (
          <PersonajesCard key={personaje.id} personaje={personaje} />
        ))}
      </ul>
    );
  }
};
