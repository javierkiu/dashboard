import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';

interface ChartUIProps {
   labels: string[];
   temp: number[];
   wind: number[];
}

export default function ChartUI({ labels, temp, wind }: ChartUIProps) {
   return (
      <>
         <Typography variant="h5" component="div">
            Gráfica: Viento vs Temperatura
         </Typography>
         <LineChart
            height={300}
            series={[
               { data: temp, label: 'Temperatura (2m)' },
               { data: wind, label: 'Velocidad del viento (10m)' },
            ]}
            xAxis={[{ scaleType: 'point', data: labels }]}
         />
      </>
   );
}