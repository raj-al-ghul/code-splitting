import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Profile from './Profile';
import Home from './Home';

const Profile = React.lazy(() => import('./Profile'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
    </React.Suspense>
  );
}

export default App;
