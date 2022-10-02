import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CompMenu } from '../components/Menu/CompMenu'

export const Menu = React.memo(() => {

    
  const [MostrarMenu, setMostrarMenu] = useState(false)
  
  const navigate = useNavigate();
  
  const Logout = () => {
    navigate('/')
  }
  
  const adivinanza = () => {
    setMostrarMenu(!MostrarMenu)
  }

    
    
  
  return (
    <div className='menu__container'>

    <div className='menu'>
          <span>Elija una Opcion</span>
          <hr/>
          <div className='menu-opciones'>
            <button onClick={ adivinanza }>Adivinanza</button>
            <button onClick={ Logout }>Cerrar Sesión</button>

          </div>
          <img src='../src/assets/icons/icon1.png'/>
        </div>
        
        {MostrarMenu && <CompMenu/>}
    </div>
  )
}
)