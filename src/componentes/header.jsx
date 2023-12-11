import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'



const Header = ({ onSearch }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleTipoRecetaClick = async (tipoReceta) => {
   try {
     const response = await axios.get(`http://localhost:3000/recetas/${tipoReceta}`);
     const data = response.data;

     if (response.status === 200) {
       console.log('Datos del backend:', data);
       // Aquí puedes manejar los datos según tus necesidades
     
       navigate(`/infoReceta/${tipoReceta}`);
       console.error('Error en la respuesta del backend:', data.message);
     }
   } catch (error) {
     console.error('Error al llamar a la API:', error);
   }
 };

  return (
    <div className="w-full mx-auto fixed top-0 py-6 sm:py-4 z-10 bg-gradient-to-r from-blue-200 to-green-300 shadow-md">
    <div className="container mx-auto py-0 sm:py-0 ">
    <div className="absolute top-9 animate-bounce left-30 flex items-center">
          <span role="img" aria-label="Saltando" className="text-2xl animate-bounce">
            <img srcSet="public/cocinero.png" alt="Imagen Saltando" className="w-28 h-20"  style={{ animationDelay: '0s' }} />
          </span>
          <span role="img" aria-label="Saltando" className="text-2xl ml-4 animate-bounce">
            <img srcSet="public/tenedor3.png" alt="Imagen Saltando" className="w-28 h-20" style={{ animationDelay: '0s' }} />
          </span>
   </div>
   <div className="absolute top-6 animate-bounce left-52">

   </div>
       <div className="flex items-center justify-end p-2">
          <h1 className=" font-montserrat text-6xl sm:text-6xl md:text-6 p-0 font-bold" >DeliciousCK</h1> 
          <img srcSet="/logo.jpeg" alt="Logo"  className=" ml-4 rounded-full w-20 h-18 border border-solid border-black" />
       </div>
       <h1 className="border-b-8 border-white w-full"></h1>
 
       <div className='p-4 flex items-center justify-between'>
          <nav className="border-gray-200 dark:bg-gray-900 w-full">
             <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 font-medium border md:space-x-8
                md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 
                md:dark:bg-gray-900 dark:border-gray-700 ">
                 
                {/*Inicio*/}
                <li><a href= "/" onClick={(e) => { e.preventDefault(); 
                navigate('/'); 
                }} className="text-xl sm:text-2xl md:text-3xl  block py-2 px-3 text-black bg-blue-700 rounded 
                md:bg-transparent md:text-black-700 md:p-1 md:dark:text-500 
                transition-colors duration-300 hover:text-blue-500 cursor-pointer font-freemono font-bold" aria-current="page">Inicio</a></li>
           
                {/*Desplegable */}
                <li className="relative group">
                   <a href= "/infoReceta" onClick={(e) => { e.preventDefault();
                }}
                     className="text-xl sm:text-2xl md:text-3xl  block py-2 px-3 text-black bg-blue-700 rounded
                      md:bg-transparent md:text-black-700 md:p-1
                     md:dark:text-500 transition-colors duration-300 hover:text-blue-500 cursor-pointer font-freemono font-bold"
                     aria-current="page"
                  >
                     Tipos de recetas
                  </a>

                  <ul className="hidden absolute left-0 space-y-2 bg-white border border-gray-300 py-2 group-hover:block rounded-md shadow-md w-300px right-0">
                     <li>
                        <a
                        href="#"
                        onClick={() => handleTipoRecetaClick('tradicional')}
                        className="block px-12 py-4  text-xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full flex items-center"
                        >
                        <span className="flex items-center">
                           <span className="mr-3 text-2x1">☕</span>
                           Tradicional
                        </span>
                        <span className="ml-auto">&#8250;</span>
                        </a>
                     </li>
                     <li>
                        <a
                        href="#"
                        onClick={() => handleTipoRecetaClick('reposteria')}
                        className="block px-12 py-4 text-xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full flex items-center"
                        >
                        <span className="flex items-center">
                           <span className="mr-3 text-2xl">🎂</span> 
                           Repostería
                        </span>
                        <span className="ml-auto">&#8250;</span>
                        </a>
                     </li>
                     <li>
                        <a
                        href="#"
                        onClick={() => handleTipoRecetaClick('navidena')}
                        className="block px-12 py-4 text-xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full flex items-center"
                        >
                        <span className="flex items-center">
                           <span className="mr-3 text-2x1">🎅</span>
                           Navideña
                        </span>
                        <span className="ml-auto">&#8250;</span>
                        </a>
                     </li>
                     <li>
                        <a
                        href="#"
                        onClick={() => handleTipoRecetaClick('salsas')}
                        className="block px-12 py-4 text-xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full flex items-center"
                        >
                        <span className="flex items-center">
                           <span className="mr-3 text-2xl">🌶️</span> 
                           Salsas
                        </span>
                        <span className="ml-auto">&#8250;</span>
                        </a>
                     </li>
                     <li>
                        <a
                        href="#"
                        onClick={() => handleTipoRecetaClick('bebidas')}
                        className="block px-12 py-4 text-xl hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full flex items-center"
                        >
                        <span className="flex items-center">
                           <span className="mr-3 text-2xl">🍹</span> 
                           Bebidas
                        </span>
                        <span className="ml-auto">&#8250;</span>
                        </a>
                     </li>
                  </ul>
                </li>

                {/*Busqueda por filtros*/}
                <li><a href="#" className="text-xl sm:text-2xl md:text-3xl  block py-2 px-3 text-black bg-blue-700 rounded
                      md:bg-transparent md:text-black-700 md:p-1
                     md:dark:text-500 transition-colors duration-300 hover:text-blue-500 cursor-pointer font-freemono font-bold" 
                aria-current="page">Busqueda por filtros</a></li>             

             </ul>
          </nav>
          {/*Buscador*/}
          <div className="flex items-center relative">
            <input
                type="search"
                className="px-20 py-2 italic border border-gray-600 rounded-full shadow-md"
                placeholder="Buscar Recetas..."
                value={search}
                onChange={ handleSearch}
            />
            <div className="absolute left-2">
               <RiSearchLine className="ml-1 text-gray-500"  />  
            </div>
          </div>         
       </div>
    </div>
 </div>
 
  );
}

export default Header;
