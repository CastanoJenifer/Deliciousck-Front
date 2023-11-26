import React from 'react'
import Header from './header'
import Inicio from './Inicio'

const Contenido = () => {
  return (
    <>
     <div className="min-h-auto">
      {/*-----------------Header-----------------*/}
      <Header />
      
      {/*-----------------Inicio-----------------*/}
      <Inicio />
     </div>
    </>
  )
}

export default Contenido;