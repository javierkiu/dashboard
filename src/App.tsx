import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import DataFetcher from './functions/DataFetcher';

import TableUI from './components/TableUI';
import ChartUI from './components/ChartUI';
import './App.css'
import { Grid } from '@mui/material';
import SelectorUI from './components/SelectorUI';
import IndicatorUI from './components/IndicatorUI';


function App() {
     const [city, setCity] = useState('guayaquil'); // Valor por defecto

     const dataFetcherOutput = DataFetcher(city);

   return (
      <Grid container spacing={5} justifyContent="center" alignItems="center">
         {/* Selector */}
         <Grid size = {{xs:12, md:3}}>
            <SelectorUI onCityChange={setCity} />
         </Grid>

         {/* Encabezado */}
         <Grid size={{xs:12, md:12}}>Elemento: Encabezado</Grid>

         {/* Alertas */}
         <Grid size={{xs:12, md:12}}>Elemento: Alertas</Grid>

         {/* Indicadores */}
         <Grid container size={{ xs: 12, md: 9 }}>
            {dataFetcherOutput.loading && <p>Cargando datos...</p>}
            {dataFetcherOutput.error && <p>Error: {dataFetcherOutput.error}</p>}
            {dataFetcherOutput.data && (
               <>
                  <Grid size={{ xs: 12, md: 3 }}>
                     <IndicatorUI
                        title='Temperatura (2m)'
                        description={dataFetcherOutput.data.current.temperature_2m + " " + dataFetcherOutput.data.current_units.temperature_2m} />
                  </Grid>
                  <Grid size={{ xs: 12, md: 3 }}>
                     <IndicatorUI
                        title='Temperatura aparente'
                        description={dataFetcherOutput.data.current.apparent_temperature + " " + dataFetcherOutput.data.current_units.apparent_temperature} />
                  </Grid>
                  <Grid size={{ xs: 12, md: 3 }}>
                     <IndicatorUI
                        title='Velocidad del viento'
                        description={dataFetcherOutput.data.current.wind_speed_10m + " " + dataFetcherOutput.data.current_units.wind_speed_10m} />
                  </Grid>
                  <Grid size={{ xs: 12, md: 3 }}>
                     <IndicatorUI
                        title='Humedad relativa'
                        description={dataFetcherOutput.data.current.relative_humidity_2m + " " + dataFetcherOutput.data.current_units.relative_humidity_2m} />
                  </Grid>
               </>
            )}
         </Grid>

         {/* Gráfico */}
         <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            {dataFetcherOutput.data && (
               <ChartUI
                  labels={dataFetcherOutput.data.hourly.time}
                  temp={dataFetcherOutput.data.hourly.temperature_2m}
                  wind={dataFetcherOutput.data.hourly.wind_speed_10m}
               />
            )}
         </Grid>

         {/* Tabla */}
         <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
         {dataFetcherOutput.data && (
            <TableUI
               labels={dataFetcherOutput.data.hourly.time}
               temp={dataFetcherOutput.data.hourly.temperature_2m}
               wind={dataFetcherOutput.data.hourly.wind_speed_10m}
            />
         )}
         </Grid>

         {/* Información adicional */}
         <Grid size={{xs:12, md:12}}>Elemento: Información adicional</Grid>
      </Grid>
   );
}

export default App;