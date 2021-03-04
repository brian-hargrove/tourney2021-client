import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import '../styles/Navbar.css';

const RegionDropdown = () => {
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
              <DropdownItem>Region 1</DropdownItem>
              <DropdownItem>Region 2</DropdownItem>
              <DropdownItem>Region 3</DropdownItem>
              <DropdownItem>Region 4</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default RegionDropdown;
