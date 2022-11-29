import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


export default function MisionVision({title, subheader}) {
  const theme = createTheme({
    typography:  {
      fontFamily: ["Anek Devanagari", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 500
    }
  });
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ width: 500, height: 250 }} aling="center" padding="20">
      <CardHeader
        align="center"
        title={title}
        subheader={subheader}
        fontSize="20px"
      />
      
    </Card>
    </ThemeProvider>
  );
}
