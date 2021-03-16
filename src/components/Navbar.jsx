import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
// import CollegeDropdown from './CollegeDropdown';
import RegionDropdown from './RegionDropdown';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="dropdown">
          {/* <CollegeDropdown /> */}
          <RegionDropdown />
        </div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/collegeinfo">Colleges</Link>
        </li>
        <li>
          <Link to="/schoolInfo">School Info</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/teamtable">Team Input</Link>
        </li>
        <li>
          <Link to="/scheduletable">Schedule Update</Link>
        </li>
      </nav>
    </>
  );
};
export default Navbar;
