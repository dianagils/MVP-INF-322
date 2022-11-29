import React from 'react'
import { useParams, userLocalStore} from "react-router-dom";
import LogoUSM from '../assets/usm.png'
import Binmo from '../assets/binmo.jpg';
import PERFIL from '../assets/perfil.png';
<<<<<<< HEAD
import './estilos.css';
=======
>>>>>>> 74407ed13a9807655583a2a0e28343677db8d746
import MisionVIsion from '../components/mision_vision';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import ResponsiveAppBar from '../components/responsive_app_bar';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import PersistentDrawerRight from '../components/drawer';
import IntegrantesCard from '../components/integrantes-card';

export const Stands = () => {
  const { id } = useParams();
  return (
    <div className='navbar'>
<<<<<<< HEAD
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
=======
      <ResponsiveAppBar id={id}/>
      {(() => {
        if (id.id == 2) {
          return  <div className="eval-button" >
          <Button variant='contained' href="/stand-edit" >Editar Proyecto</Button>
        </div>
        }
      })()}
      <div className="Proyectos" alignItems="center">
        <h1 className='page__title' style={{textAlign: "center"}}>BINMO</h1>
      </div>
      <div className="row mt-5">
        <Stack direction="row">
            <img src={Binmo} height={300} alt="proyext image" />
              <span className='my-text' style={{fontSize: '20px', fontWeight: 'bold', color: 'blue', padding: '20px', textAlign: 'center'}} > 
              BINMO es un sistema de detección temprana de bullying mediante 
              análisis de video en tiempo real para instituciones educacionales, 
              involucrando a la comunidad escolar con reportes anónimos, recursos 
              informativos y registro de casos.
>>>>>>> 74407ed13a9807655583a2a0e28343677db8d746
              </span> 
        </Stack>
      </div>


<<<<<<< HEAD
      <Stack spacing={30} direction='row'  alignItems="center">
=======
      <Stack padding={10} spacing={19} direction='row'  alignItems="center">
          
      <div className="subrender"> </div>
>>>>>>> 74407ed13a9807655583a2a0e28343677db8d746
        
      <MisionVIsion title = "MISION" subheader="Nuestra Visión es generar cambios significativos en la 
      salud mental y bienestar de los establecimientos educacionales del país, aportando y generando conciencia 
      social a través del uso de tecnología e Inteligencia Artificial." />
      <MisionVIsion title = "VISION" subheader="Nuestra Misión es entregar las mejores herramientas para contribuir
       al bienestar de los integrantes de la comunidad escolar."/>
      </Stack>

      <h1 className='page__title' style={{textAlign: "center"}}>Conoce a nuestros integrantes</h1>
        <div className='team'>
          <div className='row'>
<<<<<<< HEAD
        <Stack spacing={2}  direction='row'  alignItems="center">
          <IntegrantesCard title = "Integrante 1" image = {PERFIL} subheader="Scrum Master"/>
          <IntegrantesCard title = "Integrante 2" image = {PERFIL} subheader="Backend Developer"/>
          <IntegrantesCard title = "Integrante 3" image = {PERFIL} subheader="Frontend Developer"/>
=======
        <Stack  spacing={4}  direction='row' justifyContent={"space-arround"}>
        <div className="subrender"> </div>
          <IntegrantesCard title = "Gabriela Acuña" image = {PERFIL} subheader="Scrum Master" link="https://www.linkedin.com/in/gabriela-acu%C3%B1a-385129219/"/>
          <IntegrantesCard title = "Tomas Morales" image = {PERFIL} subheader="Backend Developer" link="https://www.linkedin.com/in/tom%C3%A1s-morales-9180b9220/"/>
          <IntegrantesCard title = "Vania Gallardo" image = {PERFIL} subheader="Frontend Developer" link="https://www.linkedin.com/in/vania-gallardo-5b8754165/"/>
>>>>>>> 74407ed13a9807655583a2a0e28343677db8d746
        </Stack>
        </div>
        <div className='row'>
        <Stack spacing={2} direction='row'  alignItems="center">
<<<<<<< HEAD
          <IntegrantesCard title = "Integrante 4" image = {PERFIL} subheader="Product Owner"/>
          <IntegrantesCard title = "Integrante 5" image = {PERFIL} subheader="IA developer"/>
=======
          <IntegrantesCard title = "Diana Gil" image = {PERFIL} subheader="Product Owner" link="https://www.linkedin.com/in/diana-gil-silvestre-5b024b216/"/>
          <IntegrantesCard title = "Dylan Oteíza" image = {PERFIL} subheader="IA developer" link="https://www.linkedin.com/in/dylan-ote%C3%ADza-canales-64bb69223/"/>
>>>>>>> 74407ed13a9807655583a2a0e28343677db8d746
        </Stack>
        </div>
        </div>
    </div>
  )
}

    
export default Stands
