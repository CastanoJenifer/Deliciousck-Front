import React, { useState, useEffect } from 'react';
import RecetaCard from './receta';

const Inicio = () => {
  const [recetas, setRecetas] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3000/allRecipes')
      .then(response => response.json())
      .then(data => setRecetas(data));
  }, []);


  return (
    <div className="flex flex-wrap justify-center gap-12 mt-56">
      {recetas.map((receta) => (
        <RecetaCard
          key={receta.cod}
          cod={receta.cod}
          imagenprincipal={receta.imagenprincipal}
          nombre={receta.nombre}
          tipo={receta.tipo}
          tiempoduracion={receta.tiempoduracion}
          onClick={() => handleCardClick(receta.cod)}
        />
      ))}
    </div>
  );
};

export default Inicio;

