import React from 'react';
import './App.css';

import '../src/components/layout/sideNav'
import ResponsiveDrawer from '../src/components/layout/sideNav';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
        <ResponsiveDrawer position = 'fixed'></ResponsiveDrawer>

        <div className = "padding-app-drawer" />

        <Container maxWidth="xl" className="graphs-container">

        </Container>

    </div>
  );
}

export default App;
