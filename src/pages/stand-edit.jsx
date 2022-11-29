import React from 'react'
import { useParams, userLocalStore} from "react-router-dom";
import LogoUSM from '../assets/usm.png'
import Binmo from '../assets/binmo.jpg';
import './estilos.css';
import PERFIL from '../assets/perfil.png';
import MisionVIsion from '../components/mision_vision';

import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import IntegrantesCard from '../components/integrantes-card';



import ResponsiveAppBar from '../components/responsive_app_bar';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import PersistentDrawerRight from '../components/drawer';

export const StandEdit = () => {

  return (
    <div className='navbar'>
    <ResponsiveAppBar id={1}/>
    <PersistentDrawerRight/>
  <div className="Proyectos" alignItems="center">
      <h1 className='page__title' style={{textAlign: "center"}}>BINMO</h1>
      </div>
      <div className="row mt-5">
        <Stack direction="row">
             <img src={Binmo} height={300} alt="proyext image" />
                <div className="my-text">
                <EditText showEditButton defaultValue="Agrega tu texto" />
                </div>
        </Stack>
        </div>

        <Stack padding={10} spacing={19} direction='row'  alignItems="center">

        <div className="subrender"> </div>
        <MisionVIsion title = "MISION" />
        <MisionVIsion title = "VISION" subheader="Nuestra Misión es entregar las mejores herramientas para contribuir
         al bienestar de los integrantes de la comunidad escolar."/>
        </Stack>
  
        <h1 className='page__title' style={{textAlign: "center"}}>Conoce a nuestros integrantes</h1>
          <div className='team'>
            <div className='row'>
          <Stack spacing={2}  direction='row'  alignItems="center">
            <IntegrantesCard title = "Integrante 1" image = {PERFIL} subheader="Scrum Master"/>
            <IntegrantesCard title = "Integrante 2" image = {PERFIL} subheader="Backend Developer"/>
            <IntegrantesCard title = "Integrante 3" image = {PERFIL} subheader="Frontend Developer"/>
          </Stack>
          </div>
          <div className='row'>
          <Stack spacing={2} direction='row'  alignItems="center">
            <IntegrantesCard title = "Integrante 4" image = {PERFIL} subheader="Product Owner"/>
            <IntegrantesCard title = "Integrante 5" image = {PERFIL} subheader="IA developer"/>
          </Stack>
          </div>
          </div>
    </div>
  )
}

    
export default StandEdit
