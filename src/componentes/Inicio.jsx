import React from 'react';

const Inicio = () => {
  return (
    <div className="w-full mx-auto fixed top-50 py-90 sm:py-6 z-10 bg-white shadow-md" style={{ position: 'absolute', top: '220px',width: '100%', height: '550px' }}>
      <div className="flex justify-center p-6 space-x-4">
        <div className="w-full max-w-2xl  bg-gray-300">
        <img src="  https://okdiario.com/img/2016/05/21/recetas-cocteles-fruta-sin-alcohol-655x368.jpg"
         alt="Descripción de la primera imagen" className="w-full h-full" />
        </div>

        <div className="w-4"></div>
        
        <div className="w-full max-w-2xl bg-gray-300">
        <img src="https://i.blogs.es/87930e/comidas-ricas/1366_2000.jpg"
         alt="Descripción de la segunda imagen" className="w-full h-full" />
        </div>
      
        
      </div>
    </div>
  );
}

export default Inicio;
