import React from 'react';

import Calendar from './Calendar';
import '../styles/home.css';

const Home = props => {
  return (
    <div className="page">
      <p id="home">
        Welcome to your unofficial guide to the NCAA Men's Basketball Tournament
      </p>
      <p id="home">You can check out information on participating schools</p>
      <p id="home">
        And check out the schedule and scores by date, region and site
      </p>
      <p id="home">Enjoy the madness!!</p>
      <hr />
      {/* <Calendar /> */}
    </div>
  );
};
export default Home;
