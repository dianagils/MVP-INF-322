import React, {Component} from 'react'
import NavBar from '../components/nav_bar';
import {
  useParams
} from "react-router-dom";

import ResponsiveAppBar from '../components/responsive_app_bar';
import TeamCard from '../components/team-card';
import Stack from '@mui/material/Stack';
import PreuAPP from '../assets/preuapp.jpg';
import moreLife from '../assets/+Life.jpg';
import activate from '../assets/activate.jpg';
import AII from '../assets/AII.jpg';
import AITrainer from '../assets/aitreiner.jpg';
import AT from '../assets/AT.jpg';
import Binmo from '../assets/binmo.jpg';
import DACOT from '../assets/dacot.jpg';
import EMPATY from '../assets/empaty.jpg';
import PUDUPAL from '../assets/pudupal.jpg';
import VINCULADOS from '../assets/vinculados.jpg';

export const HomePage = () => {
  const { id } = useParams();
  return (
    <div className='navbar'>
    <ResponsiveAppBar id={id}/>
    <div className='page'>
      <h1 className='page__title'>Bienvenido a la Feria de Software Virtual 2023</h1>
      <h2>Revisa los proyectos de esta edición y visita sus stands virtuales</h2>
    </div>
    <h1 className='project__title'>Categoría Inteligencia Artifical y Ciencia de Datos</h1>
    <div className='team'>
      <div className='row'>
    <Stack spacing={2}  direction='row'  alignItems="center">
      <TeamCard title = "PreuAPP" image = {PreuAPP} description="Hola!" />
      <TeamCard title = "MoreLife" image = {moreLife} description="Mas vida"/>
      <TeamCard title = "Activate" image = {activate} description="Juego"/>
      <TeamCard title = "Artifical Inventory" image = {AII} description="AI"/>
    </Stack>
    </div>
    <div className='row'>
    <Stack spacing={2} direction='row'  alignItems="center">
      <TeamCard title = "TrAIner" image = {AITrainer} description="Hola!" />
      <TeamCard title = "AT" image = {AT} description="Mas vida"/>
      <TeamCard title = "BINMO" image = {Binmo} description="Juego"/>
      <TeamCard title = "Dacot" image = {DACOT} description="AI"/>
    </Stack>
    </div>
    <div className='row'>
    <Stack spacing={2} direction='row'  alignItems="center">
      <TeamCard title = "TrAIner" image = {AITrainer} description="Hola!" />
      <TeamCard title = "AT" image = {AT} description="Mas vida"/>
    </Stack>
    </div>
      </div>  
    </div>
  )
}

export default HomePage
