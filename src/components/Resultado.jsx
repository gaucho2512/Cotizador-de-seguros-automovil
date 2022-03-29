import { useCallback, useMemo, useRef } from 'react'
import useCotizador from '../hooks/useCotizador'
import { PLANES ,MARCAS,  } from '../constans'

const Resultado = () => {

    const {resultado , datos} = useCotizador()
    const { marca , year , plan } = datos

    const [nombreMarca] = useCallback( MARCAS.filter(m => m.id === Number(marca)) , [resultado] ) 
    const [nombrePlan] = useCallback( PLANES.filter(m => m.id === Number(plan)) , [resultado])
    const yearRef = useRef(year)

    if(resultado === 0) {
        return null
    }

  return (
    <div>
        <div className='resumen'>
           
           <h3> RESUMEN</h3>

        <p className='resultado'>
            <span>Marca : </span>
            {nombreMarca.nombre}
        </p>

        <p className='resultado'>
            <span>Año : </span>
            {yearRef.current}
        </p>

        <p className='resultado'>
            <span>Plan : </span>
            {nombrePlan.nombre}
        </p>

        <h2 className='total'> TOTAL DE LA COTIZACION : {resultado} </h2>

        </div>

      

    </div>
  )
}

export default Resultado