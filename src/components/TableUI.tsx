import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

interface TableUIProps {
   labels: string[];
   temp: number[];
   wind: number[];
}

function combineArrays(arrLabels: Array<string>, arrTemp: Array<number>, arrWind: Array<number>) {
   return arrLabels.map((label, index) => ({
      id: index,
      label: label,
      temp: arrTemp[index],
      wind: arrWind[index]
   }));
}

const columns: GridColDef[] = [
   { field: 'id', headerName: 'ID', width: 90 },
   { field: 'label', headerName: 'Hora', width: 150 },
   { field: 'temp', headerName: 'Temperatura (2m)', width: 150 },
   { field: 'wind', headerName: 'Velocidad viento (10m)', width: 180 },
   {
      field: 'resumen',
      headerName: 'Resumen',
      description: 'No es posible ordenar u ocultar esta columna.',
      sortable: false,
      hideable: false,
      width: 200,
      valueGetter: (_, row) => `${row.label || ''} ${row.temp || ''} ${row.wind || ''}`,
   },
];

export default function TableUI({ labels, temp, wind }: TableUIProps) {
   const rows = combineArrays(labels, temp, wind);

   return (
      <Box sx={{ height: 350, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 5,
                  },
               },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
         />
      </Box>
   );
}