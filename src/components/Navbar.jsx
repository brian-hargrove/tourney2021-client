import React from 'react';

import '../styles/Navbar.css';
// import CollegeDropdown from './CollegeDropdown';
import RegionDropdown from './RegionDropdown';

const Navbar = () => {
  return (
    <div className="dropdown">
      {/* <CollegeDropdown /> */}
      <RegionDropdown />
    </div>
  );
};
export default Navbar;
