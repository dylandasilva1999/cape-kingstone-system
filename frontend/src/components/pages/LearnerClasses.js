import '../../App.css';
import React, { useEffect, useState, Fragment } from 'react';

import '../layout/sideNav'
import ResponsiveDrawer from '../layout/sideNav';
import '../containers/timetable';

import Container from '@material-ui/core/Container';
//import Grid from '@material-ui/core/Grid';

export default function LearnerClasses(){

    const [classData, setClassData] = useState([]);

    useEffect(() => {
  
        fetch("http://localhost:8000/api/learners/3/classes", {
                method: 'GET',
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

                    <h1 id="classes">My Classes</h1>
                    <div className="divider" />

                    <Fragment>
                    {classData.length
                    ? classData.map((i, index) => {
                        return (
                            <div key={index} className="my-classes">
                                <p>Learner Name: <h3>{i.learner}</h3> </p>
                                <p>The Subject: <h3>{i.learnerSubjects}</h3> </p>
                            </div>
                        )
                    })
                    : "There are no classes"}
                    </Fragment>

                </Container>
            </div>
        )
}