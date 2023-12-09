import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const Inforeceta= () => {
  const navigate = useNavigate();
  const { tipoReceta } = useParams();
  const [loading, setLoading] = useState(true);
  const [recetas, setRecipes] = useState([]);

  const goToInicio = () => {
    navigate("/");
  };

  const goToDetallesReceta = (recetaId) => {
    navigate(`/detallesReceta/${recetaId}`);
  };
  

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        let response;
        switch (tipoReceta) {
          case 'tradicional':
            response = await axios.get('http://localhost:3000/recetas/tradicional');
            break;
          case 'navidena':
            response = await axios.get('http://localhost:3000/recetas/navidena');
            break;
          case 'salsas':
            response = await axios.get('http://localhost:3000/recetas/salsas');
            break;
          case 'bebidas':
            response = await axios.get('http://localhost:3000/recetas/bebidas');
            break;
          case 'reposteria':
            response = await axios.get('http://localhost:3000/recetas/reposteria');
            break;
          default:
            break;
        }
        // Actualiza el estado con los datos recibidos
        setRecipes(response.data);
      } catch (error) {
        console.error('Error al obtener recetas:', error);
      } finally {
        setLoading(false);  // Agrega esta línea para indicar que la carga ha finalizado
      }
    };
    // Llama a la función para obtener las recetas cuando el componente se monta
    fetchRecipes();
  }, [tipoReceta]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-green-300">
      <div className="bg-white shadow-md p-8 rounded-md w-4/5">
        <button
          className="absolute top-4 left-4 bg-black text-white p-4 shadow-lg rounded-full hover:bg-green-600 hover:scale-105 transition duration-300 ease-in-out"
          onClick={goToInicio}
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
        </button>
  
        <h1 className="text-center text-4xl font-extrabold text-black-700 italic mb-6">{tipoReceta}</h1>
        {loading ? (
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="flex items-center justify-center">
                      <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle text-black">
                        <span className="hidden">Loading...</span>
                      </div>
                    </div>
                  </div>
          ) : (

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden">
          {recetas.map((receta) => (
            <div
              key={receta.cod}
              className="group rounded-xl m-5 shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-90 hover:border-4 hover:border-green-500 relative"
              style={{ background: 'linear-gradient(to right, #B4F0B4, #B4E3F0)' }}
            >
              <img
                src={`http://localhost:3000/${receta.imagenprincipal}`}
                alt={receta.nombre}
                className="w-4/5 h-80 mx-auto object-cover rounded-t-xl text-center m-4"
              />
              <div className="p-1">
                <h2 className="text-xl font-semibold text-center mb-4">{receta.nombre}</h2>
              </div>
              <div className="p-1">
                <h2 className="text-xl font-semibold text-center mb-4">{receta.tiempoduracion}</h2>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => goToDetallesReceta(receta.cod)}
              >
              </button>
            </div>
          ))}
        </div>
        )}
        </div>
      </div>
   
  );
};

export default Inforeceta;

