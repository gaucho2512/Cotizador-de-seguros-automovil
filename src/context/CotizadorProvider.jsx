import { createContext , useState } from "react";
import { obtenerDiferenciaYear , calcularMarca , calcularPlan , formatearDinero } from "../helpers";

 const CotizadorContext = createContext()

 const CotizadorProvider = ({children}) => {

    const [cargando, setCargando] = useState(false)

    const [resultado, setResultado] = useState(0)

    const [error, setError] = useState("")

    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: ""
    })



    const handleChangeDatos = (e) => {
       setDatos({
           ...datos,
           [e.target.name] : e.target.value
       })
    }

    const cotizarSeguro = () => {
       // base
       let resultado = 2000

       // obtener diferencia de año
        const diferencia = obtenerDiferenciaYear(datos.year)

       // hay ue restar el 3% por cada año
       resultado -= ((diferencia *3) * resultado) / 100

       // europeo 30%
       // americano 15%
       // asiatico 5%
       resultado *= calcularMarca(datos.marca)


        //completo 50%
       //basico 20%
       resultado *= calcularPlan(datos.plan)
       

       //formatear dinero
       resultado =  formatearDinero(resultado)
           
            setCargando(true)
            setTimeout(() => {
                setResultado(resultado)
                setCargando(false)
            }, 3000);
    
    }
  

     return (
         <CotizadorContext.Provider
            value={{
              
                handleChangeDatos,
                datos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                setResultado,
                cargando

            }}
            >
            
                {children}
         </CotizadorContext.Provider>
     )
 }


 export {
     CotizadorProvider
 }

 export default CotizadorContext