import React, {Component} from 'react'
import NavBar from '../components/nav_bar';
import { useParams, userLocalStore} from "react-router-dom";

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
import CheckboxList from '../components/checklist';
import PersistentDrawerRight from '../components/drawer';

export const HomePage = () => {
  const { id } = useParams();
  return (
    <div className='navbar'>
    <ResponsiveAppBar id={id}/>
    <div className='page'>
    <PersistentDrawerRight/>
      <h1 className='page__title'>Bienvenido a la Feria de Software Virtual 2023</h1>
      <h2>Revisa los proyectos de esta edición y visita sus stands virtuales</h2>
    </div>
    <h1 className='project__title'>Categoría Inteligencia Artifical y Ciencia de Datos</h1>
    <div className='team'>
      <div className='row'>
    <Stack spacing={2}  direction='row'  alignItems="center">
      <TeamCard title = "MoreLife" image = {moreLife} description="Sistema informático para la predicción de escasez sanguínea."/>
      <TeamCard title = "Activate" image = {activate} description="Activate simula ser un gimnasio para tu cerebro. "/>
      <TeamCard title = "Artifical Inventory" image = {AII} description="Buscamos evitar quiebres de stock haciendo uso de IA"/>
      <TeamCard title = "TrAIner" image = {AITrainer} description="Asistente virtual con IA para motivar el ejercicio" />
    </Stack>
    </div>
    <div className='row'>
    <Stack spacing={2} direction='row'  alignItems="center">
      <TeamCard title = "AllegroTraining" image = {AT} description="Aplicación pensada para practicantes de guitarra y violín"/>
      <TeamCard title = "BINMO" image = {Binmo} description="Sistema de detección de bullying mediante análisis de video"/>
    </Stack>
    </div>
    </div>
    <h1 className='project__title'>Categoría Transformación Digital y Social</h1> <div className='team'>
    <div className='row'>
    <Stack spacing={2} direction='row'  alignItems="center">
      <TeamCard title = "Empaty" image = {EMPATY} description="Aplicación para psicólogos que permite realizar terapia online." />
      <TeamCard title = "Vinculados" image = {VINCULADOS} description="Permite conectar las necesidades sociales con las instituciones."/>
      <TeamCard title = "PuduPal" image = {PUDUPAL} description="  Asistente interactivo para web orientado a adultos mayores."/>
      <TeamCard title = "PreuAPP" image = {PreuAPP} description="Preparando la PAES con desafíos de corta duración y gamificación." />    </Stack>
      </div>
      <div className='row'>
      <TeamCard title = "Dacot" image = {DACOT} description="Plataforma web enfocada en la transformación digital de la CoT"/>

    </div>
      </div>  
    </div>
  )
}

export default HomePage
