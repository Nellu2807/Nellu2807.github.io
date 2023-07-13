import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

export const EditarPersonaje = () => {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const { personajeId } = useParams();
  
console.log("Entro el ID: " + personajeId)

  const update = async (e) => {
    e.preventDefault();
    const tempDoc = doc(db, "RaM", String(personajeId));
    const data = {
      name: name,
      location: location,
      gender: gender,
      origin: origin,
    };
    await updateDoc(tempDoc, data);
    navigate("/");
  };

  
  const getPersonajeById = async (personajeId) => {

    console.log("Voy a editar el ID: " + personajeId)

    const tempDoc = await getDoc(doc(db, "RaM", String(personajeId)));
    if (tempDoc.exists()) {
      setName(tempDoc.data().name);
      setGender(tempDoc.data().gender);
      setOrigin(tempDoc.data().origin);
      setLocation(tempDoc.data().location);
    } else {
      console.log("No existe el personaje con ID: " + personajeId);
    }
  };

  useEffect(() => {
 
 console.log("Buscando el ID: " + personajeId)
    getPersonajeById(personajeId);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Editar Personaje</h1>
          <form onSubmit={update}>

            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Origen</label>
              <input
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Genero</label>
              <input
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Ubicacion</label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Editar Personaje
            </button>
             <Link to= "/">
            <button className="btn btn-danger">
            Cancelar
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
