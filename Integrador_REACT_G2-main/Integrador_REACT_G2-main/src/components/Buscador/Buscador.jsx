import "./Buscador.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Buscador = () => {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    // e.preventDefault(); 
    (searchText === '') ? alert(`Ingrese un criterio de busqueda. No puede estar vacio.`) : navigate(`/buscar/${searchText}`);
    console.log("El texto a buscar es: " + searchText)
  };

  return (
    <form className="buscadorContainer" onSubmit={handleSubmit}>
      {" "}
      <div className="buscadorBox">
        <span>Nombre del personaje:  </span>
        <input
          value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)
          }
          type="text"
          className="buscadorInput"
        />
        <div className="box-buscador">
          <button type="submit" className="buscadorButton">
            <i className="fa-solid fa-binoculars"></i>
          </button>
        </div>
      </div>
    </form>
  );
};
