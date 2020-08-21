import '../../App.css';
import React, { useEffect, useState, Fragment } from 'react';

import '../layout/sideNav'
import ResponsiveDrawer from '../layout/sideNav';
import '../containers/timetable';

import { Redirect } from 'react-router';

import Container from '@material-ui/core/Container';
//import Grid from '@material-ui/core/Grid';

export default function MyClasses(){

    const [classData, setClassData] = useState([]);

    useEffect(() => {
  
        fetch("http://localhost:8000/api/classes")
                .then(response => {
                    response.json();
                })
                .then(data => {
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

                    <div>  
                    {classData.length
                        ? classData.map((s, index) => {
                            return (
                                <div key={index}>
                                    <h3>{s.subject}</h3>
                                </div>
                            )
                        }) : "There are no classes"}
                    </div>  

                </Container>
            </div>
        )
}