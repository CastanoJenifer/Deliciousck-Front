import { Routes, Route } from "react-router-dom"
import Contenido from "./componentes/Contenido.jsx";
import Inforeceta from "./Page/InfoReceta";
import DetallesReceta from "./Page/DetallesReceta";
import Comentarios from "./Page/Comentarios";
import './App.css';

function App() 
{
  return (
  <>
  <Routes>
  <Route path="/" element={<Contenido />} /> 
  <Route path="/infoReceta/:tipoReceta?" element={<Inforeceta />} />
  <Route path="/DetallesReceta/:recetaId" element={<DetallesReceta />} /> 
  <Route path = "/Comentarios/: recetaId" element={<Comentarios />} /> 
 
  </Routes>
  </>
  );
}

export default App
