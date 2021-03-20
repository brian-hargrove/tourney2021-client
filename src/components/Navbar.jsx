import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
import RegionDropdown from './RegionDropdown';
import DateDropdown from './DateDropdown';

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
            Schools
          </Link>
        </oi>
        {/* <oi>
          <Link to="/calendar" className="link">
            Calendar
          </Link>
        </oi> */}
        <RegionDropdown />
        <DateDropdown />
        {/* <oi>
          <Link to="/teamtable" className="link">
            Team Input
          </Link>
        </oi>
        <oi>
          <Link to="/scheduletable" className="link">
            Schedule Update
          </Link>
        </oi>
        <oi>
          <Link to="schedulecreate" classname="link">
            Scheduele Create
          </Link>
        </oi>
        <oi>
          <Link to="teaminput" classname="link">
            Team Create
          </Link>
        </oi> */}
      </nav>
    </>
  );
};
export default Navbar;
