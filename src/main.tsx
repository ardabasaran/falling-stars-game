import { Box, CssBaseline, Grid, Paper } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FallingStars from './FallingStars'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <FallingStars />
        </ThemeProvider>
    </React.StrictMode>
)
