import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import '../styles/Navbar.css';

const CollegeDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState();

  const dropdownSchool = () => {
    // event.preventDefault();

    fetch('http://localhost:3000/team/', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
    console.log(data);
  };

  console.log(dropdownSchool.data);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  // need to pull college inform from team database
  // populate database from college column from team database

  return (
    <div>
      <div>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>COLLEGE</DropdownToggle>
          <DropdownMenu id="collegeDropdown">
            <DropdownItem header>SCHOOL LIST</DropdownItem>
            <DropdownItem>{dropdownSchool}</DropdownItem>
            <DropdownItem text>Dropdown Item Text</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default CollegeDropdown;
