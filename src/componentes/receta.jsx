import React from 'react';
import '../app.css';

const RecetaCard = ({cod, nombre, tipo, tiempoduracion, imagenprincipal}) => {
    return (
        <div className="flex flex-col items-center justify-center w-80 h-100 p-4 targeta card">
            <img src={`http://localhost:3000/${imagenprincipal}`} alt="Imagen de la receta" className="w-full h-56 mb-4" />
            <h2 className="text-xl font-bold mb-2">{nombre || 'No encontrada'}</h2>
            <p className="text-slate-800 mb-2">{tipo || 'Indefinido'}</p>
            <p className="text-gray-800">{tiempoduracion  || '00:00:00'}</p>
        </div>
    );
};

export default RecetaCard;

