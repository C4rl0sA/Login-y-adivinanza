import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { CompHome } from '../components/Login/CompHome';

export const Home = () => {

    const navigate = useNavigate()
  
   const [BD, setBD] = useState({
    user: '',
    pass: '',
    Captcha: ''
   })
   const [SE, setSE] = useState('')

    const {user, pass, Captcha} = BD;

    const captcha1 = user % 10
    const captcha2 = pass % 10

    const total = captcha1 + captcha2;

    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        if(user === '1048264406' && pass === '6044628401' && Captcha === total.toString()){
          
         setSE('Registro exitoso')
         navigate('/menu')

        }else{ setSE('Registro fallido')
          
          setTimeout(() => {
              
              setSE('');
              setBD({
                user: '',
                pass: '',
                Captcha: '',
              })
            }, 3000);
          }
          }
          
    


      return (
        <div className='container'>

        <CompHome
        handleSubmit={ handleSubmit }
        BD= {BD}
        setBD={setBD}
        captcha1={ captcha1 }
        captcha2={ captcha2 }
        SE={ SE }
        setSE= { setSE }
        />

        </div>
      )
 
}
