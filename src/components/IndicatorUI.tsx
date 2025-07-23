import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import type { ReactNode } from 'react';

interface IndicatorUIProps {
  title?: string;
  description?: string;
  darkMode: boolean;
  icon?: ReactNode; // Nuevo prop para el icono
}

export default function IndicatorUI(props: IndicatorUIProps) {
  return (
    <Card
      sx={{
        backgroundColor: props.darkMode ? '#333' : '#fff',
        color: props.darkMode ? '#fff' : '#000',
        minHeight: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CardContent sx={{ width: '100%', p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {props.icon && (
            <Box sx={{ fontSize: 38, color: props.darkMode ? '#90caf9' : '#1976d2', display: 'flex', alignItems: 'center' }}>
              {props.icon}
            </Box>
          )}
          <Box>
            <Typography variant="h5" component="div" sx={{ color: props.darkMode ? '#fff' : '#000' }}>
              {props.description}
            </Typography>
            <Typography variant="body2" component="p" color="text.secondary" sx={{ color: props.darkMode ? '#bbb' : '#555' }}>
              {props.title}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}