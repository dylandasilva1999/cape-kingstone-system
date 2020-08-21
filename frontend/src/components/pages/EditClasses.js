import React from 'react';
import '../../App.css';

import '../layout/sideNav'
import ResponsiveDrawer from '../layout/sideNav';
import '../containers/timetable';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import Container from '@material-ui/core/Container';
//import Grid from '@material-ui/core/Grid';

export default function EditClasses(){

    return (
        <div>
            <ResponsiveDrawer position = 'fixed'></ResponsiveDrawer>

            <div className = "padding-app-drawer" />

            <Container maxWidth="xl" className="container">

                <h1 id="welcome">Edit your classes here</h1>
                <div className="divider" />

                <div className = "form-container">

                </div>
            
            </Container>
        </div>
    )
}