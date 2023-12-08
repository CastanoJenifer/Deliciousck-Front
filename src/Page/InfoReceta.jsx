import React from 'react';
import { useNavigate } from "react-router-dom";

const Inforeceta= () => {
  const navigate = useNavigate();

  const goToInicio = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col relative w-full mx-auto top-0 py-8 sm:py-6 z-10 min-h-screen">
     <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-300 shadow-md" style={{ zIndex: -1 }}>   
     <div className="absolute inset-0 bg-white"
          style={{
          margin: '2%',
          padding: '10px', 
          backgroundColor:'white'
        }}
      >

     <button
        className="absolute top-4 left-4 bg-green-500 text-white p-4 shadow-lg rounded-full hover:bg-green-600 hover:scale-105 transition duration-300 ease-in-out"
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
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </button>
    
     <h1 className='text-center italic text-black text-5xl font-bold z-10 bottom-4 left-4'>Tipo de receta</h1>  {/*Aqui va el titulo dependiendo del tipo */}
    
    {/*Recetas*/}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-hidden">
     <div className="group rounded-xl m-5 shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-90 hover:border-4 hover:border-green-500 relative" style={{ background: 'linear-gradient(to right, #B4F0B4, #B4E3F0)' }}>
                   
                    <img
                      src={'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/1c06b340734ce162966b6e4847497f52.webp?itok=U9xQDeRi'}
                      alt={'Agua de horchata'}
                      className="w-80 h-80 object-contain  mt-5 rounded items-center mx-auto"
                    />
                    <div className="p-1">
                      <h2 className="text-xl font-semibold text-center mb-4">
                      Agua de Horchata
                      </h2>
                   </div>
                



                </div>
              
                </div>
        </div>
     </div>  
   </div>      
  );
}

export default Inforeceta;

