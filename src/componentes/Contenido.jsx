import {useEffect, useState} from 'react'
import Header from './header'
import Inicio from './Inicio'
import axios from 'axios';

const Contenido = () => {
    const [filteredRecetas, setFilteredRecetas] = useState([]);
    const [allRecetas, setAllRecetas] = useState([]); // Agrega esta línea

    useEffect(() => {
        axios.get('http://localhost:3000/allRecipes')
            .then(response => {
                setAllRecetas(response.data);
                setFilteredRecetas(response.data);
            });
    }, []);

    const handleSearch = async (search = '') => {
        if (search) {
            try {
                const response = await axios.get(`http://localhost:3000/recetas/search/nombre=${search}`);
                if (response.status === 200) {
                    setFilteredRecetas(response.data);
                } else {
                    console.error('Error en la respuesta del backend:', response.data.message);
                }
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        } else {
            setFilteredRecetas(allRecetas);
        }
    };


  return (
    <>
     <div className="min-h-auto">
      {/*-----------------Header-----------------*/}
      <Header onSearch={handleSearch} />
      
      {/*-----------------Inicio-----------------*/}
      <Inicio recetas={ filteredRecetas} />
     </div>
    </>
  )
}

export default Contenido;