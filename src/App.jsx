import { Routes, Route } from "react-router-dom"
import Contenido from "./componentes/Contenido.jsx";
import Inforeceta from "./Page/InfoReceta";
import './App.css';

function App() 
{
  return (
  <>
  <Routes>
  <Route path="/" element={<Contenido />} /> 
  <Route path="/infoReceta" element={<Inforeceta />} /> 

  </Routes>
  </>
  );
}

export default App
