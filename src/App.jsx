import { Routes, Route } from "react-router-dom"
import Contenido from "./componentes/Contenido.jsx";
import Inforeceta from "./Page/InfoReceta";
import DetallesReceta from "./Page/DetallesReceta";
import Comentarios from "./Page/Comentarios";
import Meritos from "./Page/Meritos.jsx";
import './App.css';

function App() 
{
  return (
  <>
  <Routes>
  <Route path="/" element={<Contenido />} /> 
  <Route path="/infoReceta/:tipoReceta?" element={<Inforeceta />} />
  <Route path="/DetallesReceta/:recetaId" element={<DetallesReceta />} /> 
  <Route path = "/Comentarios/:recetaId" element={<Comentarios />} />
  <Route path = "/Meritos" element={<Meritos />} />
 
  </Routes>
  </>
  );
}

export default App
