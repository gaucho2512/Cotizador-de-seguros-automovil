import {Fragment} from 'react'
import { MARCAS, YEARS, PLANES } from '../constans/index'
import useCotizador from '../hooks/useCotizador';
import Error from '../components/Error'
import Spinners from './Spinners';
import Resultado from './Resultado';



const Formulario = () => {




 const handleSubmit = (e) => {
     e.preventDefault()
    
     if(Object.values(datos).includes('')) {
         setError('campo obligatorio')
         return
     }

     setError('')
     cotizarSeguro()
 }
 
  const { handleChangeDatos, 
          datos,
          error, 
          setError,
          cotizarSeguro,
          resultado,
          cargando

          } = useCotizador()

  return (
    <>

        <form 
        onSubmit={handleSubmit}
        >

            { error &&   <Error />}

            {/* LABEL 1 */}
            <div className='contenedor-inputs'>
                <label className='label-marca'>Marca</label>

                <select
                 name={"marca"}
                 value={datos.marca}
                 className='form-select'
                 onChange={handleChangeDatos}
                 >
                <option value=""> --Selecciona Marca--</option>

                 { MARCAS.map( marca => (
                      <option
                      key={marca.id}
                      value={marca.id}
                      >
                          {marca.nombre}
                      </option>
                 ))}
                 </select>
            </div>

            {/* LABEL 2 */}      
            <div className='contenedor-inputs'>
                <label className='label-marca'>Año</label>

                <select
                 name="year"
                 className='form-select'
                 onChange={handleChangeDatos}
                 value={datos.year}
                 >
                <option value=""> --Selecciona año--</option>

                 { YEARS.map( year=> (
                      <option
                      key={year}
                      value={year}
                      >
                          {year}
                      </option>
                 ))}
                 </select>
            </div>

             {/* LABEL 3 */}           
            <div className='contenedor-inputs'>
                <label className='label-marca'>Elije un Plan</label>
                 { PLANES.map( plan=> (
                    <Fragment key={plan.id}>
                        <label
                        className='form-check-label'
                        >
                         {plan.nombre}
                         </label>

                        <input
                        className='form-check-input'
                         type="radio"
                         name='plan'
                         value={plan.id}
                         onChange={handleChangeDatos}
                        
                        />
                    </Fragment>
                 ))}
                
            </div>

            <input
             type="submit"
             className='btn btn-primary boton-submit w-100'
            />

            { cargando ? <Spinners /> : <Resultado /> }
           


        </form>

       

      
    </>
  )
}

export default Formulario