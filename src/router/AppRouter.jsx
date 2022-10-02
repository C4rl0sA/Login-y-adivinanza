import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { Erro404 } from '../pages/Erro404'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='menu' element={ <Menu/> }/>

            <Route path='*' element={ <Erro404/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
