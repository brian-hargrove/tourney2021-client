import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

const DateDropdown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <div className="dropdown">
        <div>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Schedule by Day</DropdownToggle>
            <DropdownMenu id="dateDropdown">
              <DropdownItem>
                <Link to="/march18">March 18</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/march19">March 19</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/march20">March 20</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/march21">March 21</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/march22">March 22</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/march27">March 27</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/march28">March 28</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/march29">March 29</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/march30">March 30</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/april03">April 3</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/april05">April 5</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default DateDropdown;
