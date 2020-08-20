import React from 'react';
import '../src/App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Dashboard from '../src/components/pages/Dashboard';
import Login from '../src/components/pages/Login';

function App() {
  return (
    <div className="App">

        <Router>
		      <div>
		        <nav>
		          <ul>
		            <li>
		              <Link to="/dashboard">Home</Link>
		            </li>
		            <li>
		              <Link to="/login">Login</Link>
		            </li>
		          </ul>
		        </nav>

		        <Switch>
		          <Route path="/dashboard">
				  	<Dashboard />
		          </Route>
		          <Route path="/login">
				  	<Login />
		          </Route>
		        </Switch>
		      </div>
			</Router>

    </div>
  );
}

export default App;
