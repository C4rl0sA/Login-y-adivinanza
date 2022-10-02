import React from 'react'

export const CompHome = ({handleSubmit, BD, setBD, captcha1, captcha2, SE }) => {



  return (
  
        <>
        <div className='login-container animate__animated animate__fadeIn'>

          <div className='login'>
          <img className='login__logo' src='../assets/icons/perfil.jpg'/>

          <h1>Iniciar sesión</h1>
            <form 
            className='login__form'
            onSubmit={ handleSubmit }
            >
                <div className='login__form-input'>
                  <span>Usuario</span>
                  <input
                  type='text'
                  name='user'
                  autoComplete='off'
                  value={ BD.user }
                  maxLength={10}
                  onChange={ (e) => {(setBD({...BD, user: e.target.value}))} }
                  />
                </div>
                <div className='login__form-input'>
                  <span>Password</span>
                  <input
                  type='password'
                  name='pass'
                value={ BD.pass }
                maxLength={10}
                onChange={ (e) => {setBD({...BD, pass: e.target.value})} }
                  />           
                </div>
                
                <div className='login__form-captcha'>
                  <span>Captcha de seguridad:</span>
                  
                  <div className='form-captcha'>
                    
                      {captcha1} + {captcha2}


                  </div>
                </div>
                  
                  <div className='login__form-captcha-date'>

                        <input
                        type='text'
                        name='ValorCaptcha'
                        maxLength={3}
                        value={ BD.Captcha }
                        onChange={ (e) => {setBD({...BD, Captcha: e.target.value})}}
                        />
                  </div>
                    <button>Ingresar</button>
                  
                  <div className='login__form-s-e'>
                    { SE } 
                  </div>
            </form>
                    
        </div>
        
        </div>
        <div className='logo'>
            <span>Bienvenid@ al sistema de ubicacion de zonas publicas WIFI</span>
            <img src='../src/assets/icons/map.svg'/>
        </div>

      </>
  )
}
