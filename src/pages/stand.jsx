import React from 'react'
import { useParams, userLocalStore} from "react-router-dom";
import LogoUSM from '../assets/usm.png'
import Binmo from '../assets/binmo.jpg';
import './estilos.css';
import MisionVIsion from '../components/mision_vision';

import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import ResponsiveAppBar from '../components/responsive_app_bar';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import PersistentDrawerRight from '../components/drawer';

export const Stands = () => {

  return (
    <div className='navbar'>
      <ResponsiveAppBar id={1}/>
      <PersistentDrawerRight/>
      <div className="Proyectos" alignItems="center">
        <h1 className='page__title' style={{textAlign: "center"}}>BINMO</h1>
      </div>
      <div className="row mt-5" >
        <Button variant='contained' href="/stand-edit" >Editar Proyecto</Button>
      </div>
      <div className="row mt-5">
        <Stack direction="row">
            <img src={Binmo} height={300} alt="proyext image" />
              <span className='my-text' style={{fontSize: '20px', fontWeight: 'bold', color: 'blue'}} > 
                This is a simple example of a Landing Page you can build using
                Material Tailwind. It features multiple components based on the
                Tailwind CSS and Material Design by Google.
              </span> 
        </Stack>
      </div>


      <Stack spacing={30} direction='row'  alignItems="center">
        
      <MisionVIsion title = "MISION" subheader="Nuestra Visión es generar cambios significativos en la 
      salud mental y bienestar de los establecimientos educacionales del país, aportando y generando conciencia 
      social a través del uso de tecnología e Inteligencia Artificial." />
      <MisionVIsion title = "VISION" subheader="Nuestra Misión es entregar las mejores herramientas para contribuir
       al bienestar de los integrantes de la comunidad escolar."/>
      </Stack>
    </div>
  )
}

    
export default Stands
