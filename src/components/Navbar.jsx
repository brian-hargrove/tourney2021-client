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
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/collegeinfo" className="link">
            Colleges
          </Link>
        </li>
        <li>
          <Link to="/calendar" className="link">
            Calendar
          </Link>
        </li>
        <li>
          <Link to="/schedule" className="link">
            Schedule
          </Link>
        </li>
        <li>
          <Link to="/teamtable" className="link">
            Team Input
          </Link>
        </li>
        <li>
          <Link to="/scheduletable" className="link">
            Schedule Update
          </Link>
        </li>
      </nav>
    </>
  );
};
export default Navbar;
