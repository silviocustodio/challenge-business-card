import React from 'react';
import { Link } from 'react-router';

// Home page component. This serves as the welcome page with link to the library
const HomePage = () => (
  <div className="jumbotron center">
    <h1 className="lead"><b>The Challenge</b></h1>
    <p>Create a page which shows all business cards of users with search functionality using React, Redux and Redux-saga any other suitable libraries.</p>

    <div>
      <Link to="library">
        <button className="btn btn-lg btn-primary"> Business Card</button>
      </Link>
    </div>
  </div>
);

export default HomePage;