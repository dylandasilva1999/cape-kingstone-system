import React from 'react';
import '../src/App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Dashboard from '../src/components/pages/Dashboard';
import EditClasses from '../src/components/pages/EditClasses';
import MyClasses from '../src/components/pages/MyClasses';
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
					<li>
						<Link to="/classes">My Classes</Link>
					</li>
					<li>
						<Link to="/edit">Edit Classes</Link>
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
				  <Route path="/classes">
				  	<MyClasses />
		          </Route>
				  <Route path="/edit">
				  	<EditClasses />
		          </Route>
		        </Switch>
		      </div>
			</Router>

    </div>
  );
}

export default App;
