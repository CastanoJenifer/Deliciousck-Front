import { Routes, Route } from "react-router-dom"
import Contenido from "./componentes/Contenido.jsx";
import Inforeceta from "./Page/InfoReceta";
import './App.css';
import DetallesReceta from "./Page/DetallesReceta";


function App() 
{
  return (
  <>
  <Routes>
  <Route path="/" element={<Contenido />} /> 
  <Route path="/infoReceta" element={<Inforeceta />} /> 
  <Route path="/DetallesReceta" element={<DetallesReceta/>} /> 

  </Routes>
  </>
  );
}

export default App
