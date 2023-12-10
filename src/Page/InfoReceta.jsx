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

  const goBack = () => {
    console.log("Going back...");
    window.history.back();
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
    <> 
        {loading ? (
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="flex items-center justify-center">
                      <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-middle text-black">
                        <span className="hidden">Loading...</span>
                      </div>
                    </div>
                  </div>
          ) : (
            
            <div 
            className="flex items-center justify-center bg-cover bg-center relative"
            style={{
              backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_1280.jpg)',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
       <div className="bg-green-400 bg-opacity-60 absolute inset-0"></div>
        <button 
        className="absolute top-4 left-4 bg-white text-black p-6 shadow-lg rounded-full hover:bg-green-500 hover:scale-105 transition duration-300 ease-in-out z-50 cursor-pointer"
        onClick={goBack}
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
            

        <div className="mt-24 m-4 p-0">
      
        <h1
  className="absolute top-0 left-0 right-0 text-center text-7xl font-extrabold text-white mb-6 z-10 uppercase"
  style={{
    WebkitTextStroke: '4px black', // Borde negro alrededor del texto
    color: 'white', // Color blanco del texto
    borderBottom: '8px solid #ccc', // Línea gris claro
    padding: '20px',
    textShadow: 'none', // Quitar la sombra
  }}
>
  {tipoReceta}
</h1>









        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden">
          {recetas.map((receta) => (
            <div
              key={receta.cod}
              className="group rounded-xl m-8 shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-90 hover:border-4 hover:border-black relative"
              style={{ background: 'linear-gradient(to right, #B4F0B4, #B4E3F0)' }}
              onClick={() => goToDetallesReceta(receta.cod)}
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
            </div>
          ))}
          </div>
        </div>
        
        </div>
      )}
   </>
  );
};

export default Inforeceta;

