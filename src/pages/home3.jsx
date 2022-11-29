import React, {Component} from 'react'
import NavBar from '../components/nav_bar';
import { useParams, userLocalStore} from "react-router-dom";

import ResponsiveAppBar from '../components/responsive_app_bar';
import TeamCard3 from '../components/team-card3';
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
import PersistentDrawerRight from '../components/drawer';

export const HomePage3 = () => {
  const { id } = useParams();
  return (
    <div className='navbar'>
    <ResponsiveAppBar id={id}/>
    <div className='page'>
<<<<<<< HEAD
    <PersistentDrawerRight/>
=======
>>>>>>> 74407ed13a9807655583a2a0e28343677db8d746
      <h1 className='page__title'>Bienvenido a la Feria de Software Virtual 2023</h1>
      <h2>Revisa los proyectos de esta edición y visita sus stands virtuales</h2>
    </div>
    <h1 className='project__title'>Categoría Inteligencia Artifical y Ciencia de Datos</h1>
    <div className='team'>
      <div className='row'>
    <Stack spacing={2}  direction='row'  alignItems="center">
      <TeamCard3 title = "MoreLife" image = {moreLife} description="Sistema informático para la predicción de escasez sanguínea."/>
      <TeamCard3 title = "Activate" image = {activate} description="Activate simula ser un gimnasio para tu cerebro. "/>
      <TeamCard3 title = "Artifical Inventory" image = {AII} description="Buscamos evitar quiebres de stock haciendo uso de IA"/>
      <TeamCard3 title = "TrAIner" image = {AITrainer} description="Asistente virtual con IA para motivar el ejercicio" />
    </Stack>
    </div>
    <div className='row'>
    <Stack spacing={2} direction='row'  alignItems="center">
      <TeamCard3 title = "AllegroTraining" image = {AT} description="Aplicación pensada para practicantes de guitarra y violín"/>
      <TeamCard3 title = "BINMO" image = {Binmo} description="Sistema de detección de bullying mediante análisis de video"/>
    </Stack>
    </div>
    </div>
    <h1 className='project__title'>Categoría Transformación Digital y Social</h1> <div className='team'>
    <div className='row'>
    <Stack spacing={2} direction='row'  alignItems="center">
      <TeamCard3 title = "Empaty" image = {EMPATY} description="Aplicación para psicólogos que permite realizar terapia online." />
      <TeamCard3 title = "Vinculados" image = {VINCULADOS} description="Permite conectar las necesidades sociales con las instituciones."/>
      <TeamCard3 title = "PuduPal" image = {PUDUPAL} description="  Asistente interactivo para web orientado a adultos mayores."/>
      <TeamCard3 title = "PreuAPP" image = {PreuAPP} description="Preparando la PAES con desafíos de corta duración y gamificación." />    </Stack>
      </div>
      <div className='row'>
      <TeamCard3 title = "Dacot" image = {DACOT} description="Plataforma web enfocada en la transformación digital de la CoT"/>

    </div>
      </div>  
    </div>
  )
}

export default HomePage3
