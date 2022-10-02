import React, {  useMemo, useState } from 'react'

export const CompMenu = () => {
  const [Int, setInt] = useState(0)
  const [Log, setLog] = useState('')
  const [Mensaje, setMensaje] = useState('')

   const NumeroAleatorio =  useMemo(() => Math.round(Math.random()*10)
    , [])

    
    const Submit = (e) => {
      e.preventDefault();
    
      
        //
       if( Log == NumeroAleatorio ){

        setMensaje(`¡Adivinaste en  ${ Int } Intentos!`)


         }else if( Log > NumeroAleatorio){

          setMensaje('¡Te pasate!')
  
         }else if( Log < NumeroAleatorio){

          setMensaje('Estas por debajo!')

         }

         //
         if( Log > '10' || Log < '0' ){
          setMensaje('Estas fuera de intervalo!')
         }
         
          //contador
        setInt( Int + 1 );
        

          setTimeout(() => {
            setMensaje('')
          }, 1500);
        }
    

    const Input = (e) => {
      setLog(e.target.value)
      
    }


  return (

    


      <>
    

  
    <div className='adivinanza__container'>
      <h1 className='h2'>Adivinanza</h1>
      <span>Cual es el número secreto? [0 -  10]</span>
      <form onSubmit={ Submit }>
        <input
        type='number'
        name='adv'
        placeholder='Digite el numero'
        value= { Log }
        onChange={ Input }
        />
        <button>Ingresar</button>

        <div>
        { Mensaje }
        </div>
        
      </form>
      </div>
    </>
  )
}
