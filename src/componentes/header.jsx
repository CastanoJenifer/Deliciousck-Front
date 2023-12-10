import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'



const Header = () => {
  const navigate = useNavigate();
  
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
    <div className="container mx-auto py-0 sm:py-1">
       <div className="flex items-start justify-center p-1">
          <h1 className="text-4xl sm:text-5xl md:text-6 font-bold p-1">DeliciousCK</h1> 
          <img srcSet="/logo.jpeg" alt="Logo"  className="ml-4 rounded-full w-16 h-16 border border-solid border-black" />
       </div>
       <h1 className="border-b-8 border-white w-full"></h1>
 
       <div className='p-4 flex justify-between items-center'>
          <nav className="border-gray-200 dark:bg-gray-900">
             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8
                md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 
                md:dark:bg-gray-900 dark:border-gray-700 ">
                 
                {/*Inicio*/}
                <li><a href= "/" onClick={(e) => { e.preventDefault(); 
                navigate('/'); 
                }} className="text-xl sm:text-2xl md:text-3xl italic block py-2 px-3 text-black bg-blue-700 rounded 
                md:bg-transparent md:text-black-700 md:p-0 
                transition-colors duration-300 hover:text-blue-500 cursor-pointer" aria-current="page">Inicio</a></li>
           
                {/*Desplegable */}
    
             <li className="relative group">
                  <a
                     href="/infoReceta"
                     onClick={(e) => {
                        e.preventDefault();
                     }}
                     className="text-xl sm:text-2xl md:text-3xl italic block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-black-700 md:p-0 md:dark:text-500 transition-colors duration-300 hover:text-blue-500 cursor-pointer"
                     aria-current="page"
                  >
                     Tipos de recetas
                  </a>

                  <ul className="hidden absolute left-0 space-y-2 bg-white border border-gray-300 py-2 group-hover:block rounded-md shadow-md w-300px">
                     <li>
                        <a
                        href="#"
                        onClick={() => handleTipoRecetaClick('tradicional')}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                        >
                        🍲 Tradicional
                        </a>
                     </li>
                     <li>
                        <a
                        href="#"
                        onClick={() => handleTipoRecetaClick('reposteria')}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                        >
                        🍰 Repostería
                        </a>
                     </li>
                     <li>
                        <a
                        href="#"
                        onClick={() => handleTipoRecetaClick('navidena')}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                        >
                        🎄 Navideña
                        </a>
                     </li>
                     <li>
                        <a
                        href="#"
                        onClick={() => handleTipoRecetaClick('salsas')}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                        >
                        🌶️ Salsas
                        </a>
                     </li>
                     <li>
                        <a
                        href="#"
                        onClick={() => handleTipoRecetaClick('bebidas')}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                        >
                        🍹 Bebidas
                        </a>
                     </li>
                  </ul>
                </li>

                {/*Busqueda por filtros*/}
                <li><a href="#" className="text-xl sm:text-2xl md:text-3xl italic block py-2 px-3 text-black bg-blue-700 
                rounded md:bg-transparent md:text-black-700 md:p-0 
                md:dark:text-blue-500 transition-colors duration-300 
                hover:text-blue-500 cursor-pointer" aria-current="page">Busqueda por filtros</a></li>             

                </ul>
            </nav>
                  {/*Buscador*/}
                  <div className="flex items-center relative">
                     <input type="search" className="px-8 py-2 italic border border-gray-300 rounded-full shadow-md" placeholder="Buscar Recetas..." />
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
