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
import AllClasses from '../src/components/pages/AllClasses';
import Login from '../src/components/pages/Login';
import LearnerClasses from '../src/components/pages/LearnerClasses';
import ClassDetail from '../src/components/pages/ClassDetail';

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
						<Link to="/classes">All Classes</Link>
					</li>
					<li>
						<Link to="/learnerClasses">My Classes</Link>
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
				  	<AllClasses />
		          </Route>
				  <Route path="/learnerClasses">
				  	<LearnerClasses />
		          </Route>
				  <Route path="/classDetails">
				  	<ClassDetail />
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
