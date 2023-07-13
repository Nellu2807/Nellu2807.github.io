import { useState, useEffect } from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import { PersonajesCard } from "../components/PersonajesCard/PersonajesCard.jsx";
import "./BuscarPersonaje.css";
import { collection, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../firebaseConfig/firebase";
import Buttons from "../components/button/Button.jsx";

export const BuscarPersonaje = () => {
  const navigate = useNavigate();

  // const [miTexto, setMiTexto] = useState();

  const [personajes, setPersonajes] = useState([]);

  // const personajesCollection = collection(db, "RaM");

  const { textoBuscar } = useParams();

  const personajeCollection = collection(db, "RaM");

  console.log("El texto buscado es: " + textoBuscar);

  async function buscarDocumentos() {
    const miColeccion = await getDocs(personajeCollection);

    const miColeccionFiltrada = miColeccion.docs.filter((personajeFiltrado) =>
      personajeFiltrado
        .data()
        .name.toString()
        .toLowerCase()
        .includes(textoBuscar.toString().toLowerCase())
    );

    setPersonajes(
      miColeccionFiltrada.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }

  useEffect(() => {
    buscarDocumentos();
  }, [textoBuscar]);


  return (
    <div>
      <h1 class="fs-4">Cantidad de resultados para la búsqueda:

        <small class="text-body-primary fs-2"> {personajes.length} </small>

      </h1>
      <ul className="personajesGrid">
        {personajes.map((personaje) => (
          <PersonajesCard key={personaje.id} personaje={personaje} />
        ))}
      </ul>
      <div className="box-button"><Buttons
        bsPrefix={'css-button-3d--sky'}
        text={'Volver'}
        size={'sm'}
        onClick={() => navigate(`/`)} /></div>
    </div>
  )
};
