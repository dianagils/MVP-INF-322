import React from 'react'
import { useParams, userLocalStore} from "react-router-dom";
import LogoUSM from '../assets/usm.png'
import Binmo from '../assets/binmo.jpg';
import './estilos.css';
import ResponsiveAppBar from '../components/responsive_app_bar';
import TeamCard from '../components/team-card';
import IntegrantesCard from '../components/integrantes-card';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import PersistentDrawerRight from '../components/drawer';
import PreuAPP from '../assets/preuapp.jpg';
import moreLife from '../assets/+Life.jpg';
import activate from '../assets/activate.jpg';
import AII from '../assets/AII.jpg';
import AITrainer from '../assets/aitreiner.jpg';
import AT from '../assets/AT.jpg';
import DACOT from '../assets/dacot.jpg';
import EMPATY from '../assets/empaty.jpg';
import PUDUPAL from '../assets/pudupal.jpg';
import VINCULADOS from '../assets/vinculados.jpg';
import PERFIL from '../assets/perfil.png';

export const Stands = () => {

  return (
    <div className='navbar'>
    <ResponsiveAppBar id={1}/>
    <PersistentDrawerRight/>
  <div className="Proyectos" alignItems="center">
      <h1 className='page__title' style={{textAlign: "center"}}>BINMO</h1>
      </div>
      <div className="row mt-5" >
      <rigth><Button variant='contained'  href='/editar' >Editar Proyecto</Button>
      </rigth></div>
      <div className="row mt-5">
             <img src={Binmo} height={300} alt="proyext image" />
             <span className='my-text' style={{fontSize: '20px', fontWeight: 'bold', color: 'blue'}} > 
                   This is a simple example of a Landing Page you can build using
                Material Tailwind. It features multiple components based on the
                Tailwind CSS and Material Design by Google.
               </span> 
             <span> HOLA </span> 
             <span> HOLA </span> 
        <Stack direction="row">
             <img src={Binmo} height={300} alt="proyext image" />
             {/* <span className='my-text' style={{fontSize: '20px', fontWeight: 'bold', color: 'blue'}} > 
                  This is a simple example of a Landing Page you can build using
                Material Tailwind. It features multiple components based on the
                Tailwind CSS and Material Design by Google.
               </span>  */}
                <div className="my-text">
                <EditText showEditButton defaultValue="hOLA" />
                </div>
        </Stack>
        </div>
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

    
export default Stands
