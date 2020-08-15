import React from 'react';
import './App.css';

import '../src/components/layout/sideNav'
import ResponsiveDrawer from '../src/components/layout/sideNav';
import '../src/components/containers/timetable';
import CustomizedTables from '../src/components/containers/timetable';

import Container from '@material-ui/core/Container';
//import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
        <ResponsiveDrawer position = 'fixed'></ResponsiveDrawer>

        <div className = "padding-app-drawer" />

        <Container maxWidth="xl" className="container">

          <h1 id="welcome">Welcome to your timetable <h1 id="user-name">Dylan da Silva</h1></h1>
          <div className="divider" />
          <CustomizedTables />

        </Container>

    </div>
  );
}

export default App;
