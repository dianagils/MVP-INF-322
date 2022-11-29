import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import HomePage3 from '../pages/home3'
import InternalPage from '../pages/internal'
import LogIn from '../pages/login';
import Stands from '../pages/stand';
<<<<<<< HEAD
=======
import Stands3 from '../pages/stand3';
>>>>>>> 74407ed13a9807655583a2a0e28343677db8d746
import StandEdit from '../pages/stand-edit';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:id' element={<HomePage />} />
        <Route path='/profesor' element={<HomePage3 />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/login' element={<LogIn />} />
<<<<<<< HEAD
        <Route path='/stand' element={<Stands />} />
=======
        <Route path='/stand/:id' element={<Stands />} />
        <Route path='/stand3' element={<Stands3 />} />
>>>>>>> 74407ed13a9807655583a2a0e28343677db8d746
        <Route path='/stand-edit' element={<StandEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
