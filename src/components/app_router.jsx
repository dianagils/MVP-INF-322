import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import HomePage3 from '../pages/home3'
import InternalPage from '../pages/internal'
import LogIn from '../pages/login';
import Stands from '../pages/stand';
import Stands3 from '../pages/stand3';
import StandEdit from '../pages/stand-edit';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:id' element={<HomePage />} />
        <Route path='/profesor' element={<HomePage3 />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/stand/:id' element={<Stands />} />
        <Route path='/stand3' element={<Stands3 />} />
        <Route path='/stand-edit' element={<StandEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
