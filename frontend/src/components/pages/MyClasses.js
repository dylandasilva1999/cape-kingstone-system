import '../../App.css';
import React, { useEffect, useState } from 'react';

import '../layout/sideNav'
import ResponsiveDrawer from '../layout/sideNav';
import '../containers/timetable';

import { Redirect } from 'react-router';

import Container from '@material-ui/core/Container';
//import Grid from '@material-ui/core/Grid';

export default function MyClasses(){

    const [classData, setClassData] = useState();

    useEffect(() => {
  
        fetch("http://localhost:3000/api/learners/1/classes", {
                method: 'POST',
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                'Content-Type': 'application/json'
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer', 
                })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    setClassData(data);
                })
                .catch(error => {
                    console.log(`Fetch Failed ${error}`);
                });
        }, [])

    return (
        <div>
            <ResponsiveDrawer position = 'fixed'></ResponsiveDrawer>

            <div className = "padding-app-drawer" />

            <Container maxWidth="xl" className="container">

                <h1 id="welcome">Here are your classes</h1>
                <div className="divider" />

                

            </Container>
        </div>
    )
}