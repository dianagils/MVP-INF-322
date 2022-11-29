import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import LogIn from '../pages/login';
import Stands from '../pages/stand';
import StandEdit from '../pages/stand-edit';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:id' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/stand' element={<Stands />} />
        <Route path='/stand-edit' element={<StandEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
