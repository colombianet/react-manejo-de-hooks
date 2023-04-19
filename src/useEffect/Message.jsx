import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      console.log('montado');
      
      return () => {
          console.log('desmontado');
      }
    }, []);
    
  return (
    <>
        <h1>Usuario ya existe</h1>
    </>
  )
}
