import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'


const DetallesReceta = () => {
    const goBack = () => {
        window.history.back();
      };
    
    return (
       <>
       <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/fotos-premium/ingredientes-hornear-sobre-fondo-madera-oscura-vacia-colocar-texto-o-recetas-vista-superior_124507-6776.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-green-400 bg-opacity-50 absolute inset-0"></div>
        <button
          className="absolute top-4 left-4 bg-green-500 text-white p-6 shadow-lg rounded-full hover:bg-green-600 hover:scale-105 transition duration-300 ease-in-out z-10"
          onClick={goBack}
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

       
       {/* Sección Izquierda: Titulo, imagen, tipo, valoracion */}
        <div className="w-1/3 h-[80vh] bg-white p-8 rounded-md z-10">
          <h4 className="text-center text-4xl font-extrabold text-black-700 italic mb-6">
          
            <span className="text-black text-x2 font-semibold">Titulo</span>
          </h4>
          <h4 className="text-gray-700 text-lg mb-4 text-center">
            <span className="text-black text-xl font-semibold">imagen</span>
          </h4>
          <h4 className="text-gray-700 text-lg mt-2 mb-4  text-center">
            <span className="text-black text-xl font-semibold">tipo</span>
          </h4>
          <h4 className="text-gray-700 text-lg mb-4  text-center">
            <span className="text-black text-xl font-semibold">
            valoracion: 
            </span>
          </h4>
        </div>
       
        <div className="h-[80vh] w-2 bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>

     
          {/* Sección derecha: Utensilios, ingredientes, descripción, etc. */}
        <div className="w-1/3 h-[80vh] bg-white p-8 rounded-md z-10">
          <h4 className="text-gray-700 text-lg mt-2 mb-4">
            <span className="text-black text-xl font-semibold">Utensilios: </span>
          </h4>
         
          <h4 className="text-gray-700 text-lg mt-2 mb-4">
            <span className="text-black text-xl font-semibold">Ingredientes: </span>
          </h4>
          <h4 className="text-gray-700 text-lg mb-4">
            <span className="text-black text-xl font-semibold">
              Descripción: 
            </span>
          </h4>
        </div>

      

      </div>
      </>
    );
};

export default DetallesReceta;