import React from 'react'
import { useParams, userLocalStore} from "react-router-dom";
import LogoUSM from '../assets/usm.png'
import Binmo from '../assets/binmo.jpg';
import './estilos.css';

import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';



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
        <Stack direction="row">
        <img src={Binmo} height={300} alt="proyext image" />
        <img src={Binmo} height={300} alt="proyext image" />
         </Stack>
    

    </div>
  )
}

    
export default StandEdit
