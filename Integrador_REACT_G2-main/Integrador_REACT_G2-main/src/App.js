
import React, {useEffect, useState} from "react";
import Navbar from "./components/NavBar/Navbar"
import { LandingPage } from "./paginas/LandingPage";
import { DetallePersonaje } from "./paginas/DetallePersonaje";
import { EditarPersonaje } from "./paginas/EditarPersonaje";
import { BuscarPersonaje } from "./paginas/BuscarPersonaje";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import "./App.css";


function App() {

  return (
   <>
   

   <BrowserRouter>
   <Navbar brand="Rick and Morty"/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/personaje/:personajeId" element={<DetallePersonaje/>}/>
          <Route path="/editar/:personajeId" element={<EditarPersonaje/>}/>
          <Route path="/buscar/:textoBuscar" element={<BuscarPersonaje/>}/>
        </Routes>
      </BrowserRouter>
{}
   </>
  );
}

export default App;

