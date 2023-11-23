import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mx-auto fixed top-0 py-8 sm:py-6 z-10 bg-gradient-to-r from-blue-200 to-green-300 shadow-md">
    <div className="container mx-auto py-7 sm:py-2">
       <div className="flex items-center justify-center p-1">
          <h1 className="text-7xl font-bold p-1">DeliciousCK</h1> 
          <img srcSet="/logo.jpeg" alt="Logo"  className="ml-4 rounded-full w-16 h-16 border border-solid border-black" />
       </div>
       <h1 className="border-b-8 border-white w-full"></h1>
 
       <div className='p-4'>
          <nav className="border-gray-200 dark:bg-gray-900">
             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8
                md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 
                md:dark:bg-gray-900 dark:border-gray-700 ">
                 
                {/*Inicio*/}
                <li><a href= "/" onClick={(e) => { e.preventDefault(); 
                navigate('/'); 
                }} className="text-3xl italic block py-2 px-3 text-black bg-blue-700 rounded 
                md:bg-transparent md:text-black-700 md:p-0 
                transition-colors duration-300 hover:text-blue-500 cursor-pointer" aria-current="page">Inicio</a></li>
           
                {/*Desplegable */}
                <li className="relative group">
                   <a href= "/infoReceta" onClick={(e) => { e.preventDefault(); 
                navigate('/infoReceta'); 
                }} className=" text-3xl italic block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent
                    md:text-black-700 md:p-0 md:dark:text-500 transition-colors 
                    duration-300 hover:text-blue-500 cursor-pointer" aria-current="page">Tipos de recetas</a>

                   <ul className="hidden absolute left-0 mt-2 space-y-2 bg-white border border-gray-300 py-2 group-hover:block rounded-md shadow-md">
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tradicional</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reposteria</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Navideña</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Salsas</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bebidas</a></li>
                   </ul>
                </li> 
                
                {/*Busqueda por filtros*/}
                <li><a href="#" className="text-3xl italic block py-2 px-3 text-black bg-blue-700 
                rounded md:bg-transparent md:text-black-700 md:p-0 
                md:dark:text-blue-500 transition-colors duration-300 
                hover:text-blue-500 cursor-pointer" aria-current="page">Busqueda por filtros</a></li>
                
                   {/*Buscaedor*/}
                <div className="flex items-center ml-auto relative">
                   <input type="search" className="px-8 py-2 italic border border-gray-300 rounded-full shadow-md" placeholder="Buscar Recetas..." />
                   <div className="absolute left-2">
                      <RiSearchLine className="ml-1 text-gray-500"  />  
                   </div>
                </div>

             </ul>
          </nav>
       </div>
    </div>
 </div>
 
  );
}

export default Header;
