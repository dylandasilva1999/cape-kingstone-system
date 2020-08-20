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
        
        <Router>
		      <div>
		        <nav>
		          <ul>
		            <li>
		              <Link to="/">Home</Link>
		            </li>
		            <li>
		              <Link to="/login">Login</Link>
		            </li>
		          </ul>
		        </nav>

		        <Switch>
		          <Route path="/login">
		            <Login />
		          </Route>
		          <Route path="/dashboard">
		            <Home />
		          </Route>
		        </Switch>
		      </div>
		    </Router>

    </div>
  );
}

export default App;
