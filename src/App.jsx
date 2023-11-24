import { Routes, Route } from "react-router-dom"
import Contenido from "./componentes/contenido";
import Inforeceta from "./Page/InfoReceta";
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
