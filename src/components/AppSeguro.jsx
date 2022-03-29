import React from 'react'
import Formulario from './Formulario'


export const AppSeguro = () => {



  return (
      <>
      <div className='contenedor-app-seguro'>
        <header>
            <h1>COTIZADOR DE SEGUROS DE AUTO</h1>
        </header>

        <div className='row'>
            <div className="col-md-12 contenedor-formulario">
                <Formulario />
            </div>
        </div>
      </div>
      </>
  )
}
