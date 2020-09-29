import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// Data
import logo from './assets/images/logo.svg';
// Styles
import './App.css';

// Containers
const Dashboard = React.lazy(() => import('./containers/Dashboard'));

export default function App() {
  return (
    <div className="App">
      <Sidebar src={logo} />

      <div className="App-content">
        <Navbar />

        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route path="*"><Redirect to="/" /></Route>
            </Switch>
          </Suspense>
        </Router>
      </div>
    </div>
  );
}
