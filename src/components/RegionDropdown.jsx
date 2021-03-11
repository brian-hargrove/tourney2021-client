import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

const RegionDropdown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  // need to pull college inform from team database
  // populate database from college column from team database

  return (
    <div>
      <div className="dropdown">
        <div>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>REGION</DropdownToggle>
            <DropdownMenu id="regionDropdown">
              <DropdownItem>
                <Link to="/region" value="1">
                  Region 1
                </Link>
              </DropdownItem>
              <DropdownItem value="2">Region 2</DropdownItem>
              <DropdownItem value="3">Region 3</DropdownItem>
              <DropdownItem value="4">Region 4</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default RegionDropdown;
