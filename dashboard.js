import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

function FacultyDashboard() {
  return (
    <div>
      <h1>Faculty Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/settings">Settings</Link>
          </li>
          {/* Add more navigation links if needed */}
        </ul>
      </nav>
      <Switch>
        <Route path="/dashboard/profile">
          {/* Render the Profile component */}
          <Profile />
        </Route>
        <Route path="/dashboard/settings">
          {/* Render the Settings component */}
          <Settings />
        </Route>
        {/* Add more routes for other sections if necessary */}
      </Switch>
    </div>
  );
}

export default FacultyDashboard;
