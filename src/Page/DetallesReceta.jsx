import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'


const DetallesReceta = () => {
  const [loading, setLoading] = useState(true);
  const [detallesReceta, setDetallesReceta] = useState({
    receta: [{ nombre: '', tipo: '' }],
    her: [],
    ing: [],
    pasos: [],
  });
  
  const { recetaId } = useParams();
  
  const goBack = () => {
        window.history.back();
      };

      useEffect(() => {
        const fetchDetallesReceta = async () => {
          try {
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/recetas/body/${recetaId}`);
            setDetallesReceta(response.data);
            console.log(detallesReceta);
          } catch (error) {
            console.error('Error al obtener detalles de la receta:', error);
          }finally {
            setLoading(false);
          }
        };
    
        fetchDetallesReceta();
      }, []);

      const MAX_DESC_LENGTH = 500; // Longitud máxima de la descripción antes de dividirla

      useEffect(() => {
        const descripcionDiv = document.getElementById("descripcionDiv");
      
        if (descripcionDiv) {
          // Limpiar contenido existente antes de agregar nuevas páginas
          descripcionDiv.innerHTML = '';
      
          const descripcion = detallesReceta.pasos
            .map((paso) => paso.descripcion)
            .join("\n");
          const lineas = descripcion.split("\n");
          let paginaActual = 1;
          let paginaContenido = "";
      
          for (let i = 0; i < lineas.length; i++) {
            if (paginaContenido.length + lineas[i].length > MAX_DESC_LENGTH) {
              const nuevaPagina = document.createElement("div");
              nuevaPagina.innerText = paginaContenido.trim(); // Elimina espacios al inicio y al final
              nuevaPagina.classList.add("descripcion-pagina");
              descripcionDiv.appendChild(nuevaPagina);
              paginaActual += 1;
              paginaContenido = `${lineas[i]}\n`;
            } else {
              paginaContenido += `${lineas[i]}\n`;
            }
          }
      
          if (paginaContenido.length > 0) {
            const ultimaPagina = document.createElement("div");
            ultimaPagina.innerText = paginaContenido.trim();
            ultimaPagina.classList.add("descripcion-pagina");
            descripcionDiv.appendChild(ultimaPagina);
          }
      
          // Ocultar todas las páginas excepto la primera
          const paginas = document.querySelectorAll(".descripcion-pagina");
          paginas.forEach((pagina, index) => {
            if (index > 0) {
              pagina.style.display = "none";
            }
          });
        }
      }, [detallesReceta]);
      


    
        const mostrarPagina = (pagina) => {
          const paginas = document.querySelectorAll(".descripcion-pagina");
          paginas.forEach((p, index) => {
            p.style.display = index === pagina ? "block" : "none";
          });
        
          // Ocultar información de utensilios e ingredientes si no es la primera página
          const utensilios = document.querySelector(".utensilios-clase");
          const ingredientes = document.querySelector(".ingredientes-clase");
        
          if (pagina > 0) {
            utensilios.style.display = "none";
            ingredientes.style.display = "none";
          } else {
            utensilios.style.display = "block";
            ingredientes.style.display = "block";
          }
        };
    
        const mostrarSiguientePagina = () => {
          const paginas = document.querySelectorAll(".descripcion-pagina");
          let paginaActual = -1;
        
          // Encontrar la página actual
          paginas.forEach((pagina, index) => {
            if (pagina.style.display !== "none") {
              paginaActual = index;
            }
          });
        
          // Asegurarse de que hay una página actual antes de proceder
          if (paginaActual !== -1 && paginaActual < paginas.length - 1) {
            // Ocultar la página actual
            paginas[paginaActual].style.display = "none";
        
            // Mostrar la siguiente página solo si hay más páginas y llenarla completamente
            if (paginaActual + 1 < paginas.length) {
              paginas[paginaActual + 1].style.display = "block";
              mostrarPagina(paginaActual + 1);
            }
          }
        };

        const mostrarPaginaAnterior = () => {
          const paginas = document.querySelectorAll(".descripcion-pagina");
          let paginaActual = -1;
        
          // Encontrar la página actual
          paginas.forEach((pagina, index) => {
            if (pagina.style.display !== "none") {
              paginaActual = index;
            }
          });
        
          // Asegurarse de que hay una página actual antes de proceder
          if (paginaActual !== -1 && paginaActual > 0) {
            // Mostrar la página anterior
            paginas[paginaActual - 1].style.display = "block";
            mostrarPagina(paginaActual - 1);
          }
        };
      

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
          className="absolute top-4 left-4 bg-white text-black p-6 shadow-lg rounded-full hover:bg-green-500 hover:scale-105 transition duration-300 ease-in-out z-50 cursor-pointer"
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
        <div className="w-1/3 h-[90vh] bg-white p-8 rounded-md z-10">
          <h4 className="text-center text-4xl font-extrabold text-black-700 italic mb-6">
          <span className="text-black text-x2 font-semibold">{detallesReceta.receta[0].nombre}</span>
          </h4>
          <img
                src={`http://localhost:3000/${detallesReceta.receta[0].imagenprincipal}`}
                alt={detallesReceta.receta[0].nombre}
                className="w-4/5 h-80 mx-auto object-cover rounded-t-xl text-center m-6"
              />
          <h4 className="text-gray-700 text-lg mt-2 mb-4  text-center">
          <span className="text-black text-xl font-semibold">{detallesReceta.receta[0].tipo}</span>
          </h4>
          <h4 className="text-gray-700 text-lg mt-2 mb-4  text-center">
          <span className="text-black text-xl font-semibold">{detallesReceta.receta[0].tiempoduracion}</span>
          </h4>
          <h4 className="text-gray-700 text-lg mb-4  text-center">
            <span className="text-black text-xl font-semibold">
            valoracion: 
            </span>
          </h4>
        </div>
       
        <div className="h-[89vh] w-2 bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>

     
          {/* Sección derecha: Utensilios, ingredientes, descripción, etc. */}
        <div className="w-1/3 h-[90vh] bg-white p-8 rounded-md z-10">
          <h4 className="text-gray-700 text-lg mt-2 mb-4 utensilios-clase">
              <span className="text-black text-xl">Utensilios: {detallesReceta.her.map((herramienta) => herramienta.nombre).join(' , ')}</span>
          </h4>
            
            <h4 className="text-gray-700 text-lg mt-2 mb-4">
            <span className="text-black text-xl ingredientes-clase">
            Ingredientes: {detallesReceta.ing.map((item) => item.ingrediente).join(' , ')}
            </span>
          </h4>

          <h4 className="text-gray-700 text-lg ">
          <span className="text-black text-xl font-semibold">Descripción:</span>
          </h4>

          <div id="descripcionDiv">
          <ol className="list-decimal list-inside">
            {detallesReceta.pasos.map((paso, index) => (
              <li key={index} className="descripcion-pagina">
                <p className="text-2xl font-bold mb-2">{index + 1}.</p>
                <p className="text-xl">{paso.descripcion}</p>
              </li>
            ))}
          </ol>
       </div>
 
     

        
      <div className="flex items-center justify-center mt-8">
        <button
          onClick={mostrarSiguientePagina}
          className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 ease-in-out mr-8"
        >
          Siguiente página
        </button>

        <button
          onClick={mostrarPaginaAnterior}
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Página anterior
        </button>
    </div>

      </div>

      </div>
      )}
      </>
    );
};

export default DetallesReceta;