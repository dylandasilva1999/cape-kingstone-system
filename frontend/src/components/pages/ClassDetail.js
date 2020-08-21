import '../../App.css';
import React, { useEffect, useState, Fragment } from 'react';

import '../layout/sideNav'
import ResponsiveDrawer from '../layout/sideNav';
import '../containers/timetable';

import Container from '@material-ui/core/Container';
//import Grid from '@material-ui/core/Grid';

export default function AllClasses(){

    const [classDetails, setclassDetails] = useState([]);

    useEffect(() => {
  
        fetch("http://localhost:8000/api/classDetails/1", {
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
                    setclassDetails(data);
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

                    <h1 id="classes">Here are your classes</h1>
                    <div className="divider" />

                    <Fragment>
                    {classDetails.length
                    ? classDetails.map((i, index) => {
                        return (
                            <div key={index} className="all-classes">
                                <p>The Subject for this specific class is: <h3>{i.subject}</h3> </p>
                                <p>The teacher for this class is: <h3>{i.teacher}</h3> </p>
                                <p>Students in the class are: <h3>{i.students}</h3> </p>
                                <p>The classroom is: <h3>{i.class}</h3> </p>
                            </div>
                        )
                    })
                    : "There are no classes"}
                    </Fragment>

                </Container>
            </div>
        )
}