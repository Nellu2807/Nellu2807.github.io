import { useState, useEffect } from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import "./DetallePersonaje.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

export const DetallePersonaje = () => {

  const navigate = useNavigate();

  const [personaje, setPersonaje] = useState();

  const { personajeId } = useParams();

  const personajeCollection = collection(db, "RaM");

  async function buscarDocumento() {
    const data = await getDocs(personajeCollection);
    console.log("Lei coleccion en detalle");

    data.forEach((temp) => {
      if (temp.id == personajeId) {
        console.log("El id coincide: " + temp.id + " y " + personajeId);
        setPersonaje(temp.data());
      }
    });
  }

  const deletePersonaje = async (id) => {
    const personajeDoc = doc(db, "RaM", String(id));
    await deleteDoc(personajeDoc);
    console.log("Borre el id: " + id);
    navigate("/");
  };

  useEffect(() => {
    buscarDocumento();
  }, [personajeId]);

  if (!personaje) {
    return null;
  }
  const imgURL = `${personaje.image}`;

  const confirmDelete = (id) => {
    Swal.fire({
      title: "Estas Seguro/a?",
      text: "No podes revertir esta Accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Deseo Borrarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePersonaje(id);
        Swal.fire("Borrado!", "El Personaje ha sido Borrado/a.", "success");
      }
    });
  };

  return (
    <div className="contenedorDetalle">
      <img className="col" src={imgURL} alt={personaje.name} />
      <div className="personajeDetalle col">
        <p className="item">
          <strong>Nombre: </strong>
          {personaje.name}
        </p>
        <p>
          <strong>Origen: </strong>
          {personaje.origin}
        </p>

        <p>
          <strong>Genero: </strong>
          {personaje.gender}
        </p>

        <p>
          <strong>Ubicacion: </strong>
          {personaje.location}
        </p>

        <div className="container-fluid col-md3">
          <Link to={`/editar/${personajeId}`} className="btn btn-dark">
            <i className="fa-sharp fa-solid fa-pencil"></i>
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => confirmDelete(personajeId)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
