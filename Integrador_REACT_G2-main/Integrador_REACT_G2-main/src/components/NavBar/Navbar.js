import React from "react";
import Swal from "sweetalert2";

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          <i className="fa-solid fa-house"> / </i>
          {brand}
        </a>
        <button
          className="btn btn-info"
          onClick={() =>
            Swal.fire(
              "Info del Grupo 2",
              "Tobias Marcelo Romero Gómez - Diego Alejandro Erazo - Roberto Rossa - Nelly Maria Anampa Delgado - Candela Rivero - Evelyn Eduards - Pablo Blanco",
              "info"
            )
          }
        >
          <i className="fa-solid fa-info"> - Grupo 2</i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
