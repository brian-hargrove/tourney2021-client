import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
import RegionDropdown from './RegionDropdown';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="dropdown"></div>
        <oi>
          <Link to="/" className="link">
            Home
          </Link>
        </oi>
        <oi>
          <Link to="/collegeinfo" className="link">
            Colleges
          </Link>
        </oi>
        <oi>
          <Link to="/calendar" className="link">
            Calendar
          </Link>
        </oi>
        <RegionDropdown />
        <oi>
          <Link to="/teamtable" className="link">
            Team Input
          </Link>
        </oi>
        <oi>
          <Link to="/scheduletable" className="link">
            Schedule Update
          </Link>
        </oi>
      </nav>
    </>
  );
};
export default Navbar;
