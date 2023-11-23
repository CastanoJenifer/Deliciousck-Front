import { Routes, Route } from "react-router-dom"
import Contenido from "./componentes/contenido";
import Inforeceta from "./Page/InfoReceta";

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
