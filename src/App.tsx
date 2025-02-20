import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { HomePage } from './screens/HomePage/HomePage';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HomePage />
    </ThemeProvider>

  );
}

export default App;
