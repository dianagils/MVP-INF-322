import React from 'react'
import { useParams, userLocalStore} from "react-router-dom";
import LogoUSM from '../assets/usm.png'
import Binmo from '../assets/binmo.jpg';
import PERFIL from '../assets/perfil.png';
import MisionVIsion from '../components/mision_vision';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import ResponsiveAppBar from '../components/responsive_app_bar';
<<<<<<< HEAD
import { EditText, EditTextarea } from 'react-edit-text';
=======
>>>>>>> 74407ed13a9807655583a2a0e28343677db8d746
import 'react-edit-text/dist/index.css';
import PersistentDrawerRight from '../components/drawer';
import IntegrantesCard from '../components/integrantes-card';

export const Stands3 = () => {

  return (
<<<<<<< HEAD
<div href='/profesor' className='navbar'>
      <ResponsiveAppBar id={1}/>
      <PersistentDrawerRight/>
=======
    <div className='navbar'>
      <ResponsiveAppBar id={3}/>
      <div className="evalButton">
      <PersistentDrawerRight/>
      </div>
>>>>>>> 74407ed13a9807655583a2a0e28343677db8d746
      <div className="Proyectos" alignItems="center">
        <h1 className='page__title' style={{textAlign: "center"}}>BINMO</h1>
      </div>
      <div className="row mt-5">
        <Stack direction="row">
            <img src={Binmo} height={300} alt="proyext image" />
<<<<<<< HEAD
              <span className='my-text' style={{fontSize: '20px', fontWeight: 'bold', color: 'blue'}} > 
=======
            <span className='my-text' style={{fontSize: '20px', fontWeight: 'bold', color: 'blue', padding: '20px', textAlign: 'center'}} > 
>>>>>>> 74407ed13a9807655583a2a0e28343677db8d746
              BINMO es un sistema de detección temprana de bullying mediante 
              análisis de video en tiempo real para instituciones educacionales, 
              involucrando a la comunidad escolar con reportes anónimos, recursos 
              informativos y registro de casos.
              </span> 
        </Stack>
      </div>


      <Stack padding={10} spacing={19} direction='row'  alignItems="center">
          
      <div className="subrender"> </div>
        
      <MisionVIsion title = "MISION" subheader="Nuestra Visión es generar cambios significativos en la 
      salud mental y bienestar de los establecimientos educacionales del país, aportando y generando conciencia 
      social a través del uso de tecnología e Inteligencia Artificial." />
      <MisionVIsion title = "VISION" subheader="Nuestra Misión es entregar las mejores herramientas para contribuir
       al bienestar de los integrantes de la comunidad escolar."/>
      </Stack>

      <h1 className='page__title' style={{textAlign: "center"}}>Conoce a nuestros integrantes</h1>
        <div className='team'>
          <div className='row'>
        <Stack  spacing={4}  direction='row' justifyContent={"space-arround"}>
        <div className="subrender"> </div>
<<<<<<< HEAD
          <IntegrantesCard title = "Integrante 1" image = {PERFIL} subheader="Scrum Master"/>
          <IntegrantesCard title = "Integrante 2" image = {PERFIL} subheader="Backend Developer"/>
          <IntegrantesCard title = "Integrante 3" image = {PERFIL} subheader="Frontend Developer"/>
=======
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

    
<<<<<<< HEAD
export default Stands3
=======
export default Stands3
>>>>>>> 74407ed13a9807655583a2a0e28343677db8d746
