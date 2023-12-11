import React, {useState, useEffect} from 'react';
import RecetaCard from './receta';

const Inicio = ({ recetas }) => {


  return (
    <div className="flex flex-wrap justify-center text-center gap-12 mt-56 mb-12">
      {recetas.map((receta) => (
        <RecetaCard 
          key={receta.cod}
          cod={receta.cod}
          imagenprincipal={receta.imagenprincipal} 
          nombre={receta.nombre} 
          tipo={receta.tipo} 
          tiempoduracion={receta.tiempoduracion} 
        />
      ))}

    </div>
  );
}

export default Inicio;