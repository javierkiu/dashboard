// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Grid } from '@mui/material';
import SelectorUI from './components/SelectorUI';
function App() {
   return (
      <Grid container spacing={5} justifyContent="center" alignItems="center">
         {/* Selector */}
         <Grid size={{xs:12, md:3 }}>
            <SelectorUI />
         </Grid>

         {/* Encabezado */}
         <Grid size={{xs:12, md:12}} >Elemento: Encabezado</Grid>

         {/* Alertas */}
         <Grid size={{xs:12, md:12}}>Elemento: Alertas</Grid>

         {/* Selector */}
         <Grid size={{xs:12, md:3 }}>Elemento: Selector</Grid>

         {/* Indicadores */}
         <Grid size={{xs:12, md:9 }} sx={{ display: { xs: "none", md: "block"} }}>Elemento: Indicadores</Grid>

         {/* Gráfico */}
         <Grid size={{xs:12, md:6 }}>Elemento: Gráfico</Grid>

         {/* Tabla */}
         <Grid size={{xs:12, md:6 }} sx={{ display: { xs: "none", md: "block" } }}>Elemento: Tabla</Grid>

         {/* Información adicional */}
         <Grid size={{xs:12, md:12}}>Elemento: Información adicional</Grid>

      </Grid>
   );
}

export default App;