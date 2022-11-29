import React from 'react'
import { useParams, userLocalStore} from "react-router-dom";
import LogoUSM from '../assets/usm.png'
import Binmo from '../assets/binmo.jpg';
import './estilos.css';

import ResponsiveAppBar from '../components/responsive_app_bar';

import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';



export const Stands = () => {
  const { id } = useParams();
  return (
    <div className='navbar'>
    <ResponsiveAppBar id={1}/>
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
        </div>
        <div className="my-text">
        <p style={{fontSize: '18px', fontWeight: 'bold', color: 'blue'}}>Hola Mundo!</p>
        </div>
    
    </div>
  )
}

    







export default Stands
