import React from 'react';
import '../stylesheets/header.css';
import SearchIcon from '../../public/SearchIcon.svg'

const Header = () => {
  return (
    <header>
      <div className="header-ab">
        <h1 className='titulos'>Inicio</h1>
        <h1 className='titulos otros'>Tipos de recetas</h1>
        <h1 className='titulos otros'>Busqueda por filtros</h1>
        <input type="search" className="search-input" placeholder='buscar ...' style={{backgroundImage: `url(${SearchIcon})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right', paddingLeft: '15px', paddingRight: '30px'}} />
      </div>
    </header>
  );
};

export default Header;
