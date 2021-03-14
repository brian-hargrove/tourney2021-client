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
  const [dropValue, setDropValue] = useState();
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const saveDropValue = value => {
    setDropValue(value);
  };

  return (
    <div>
      <div className="dropdown">
        <div>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>REGION</DropdownToggle>
            <DropdownMenu id="regionDropdown">
              <DropdownItem>
                <Link
                  to="/region"
                  value="2"
                  onClick={event => setDropValue(2)}
                  saveDropValue={saveDropValue}
                >
                  Region 1
                </Link>
              </DropdownItem>
              {/* <DropdownItem>
                <Link
                  to="/region"
                  value="2"
                  // onClick={event => setDropValue(event.target.value)}
                  // saveDropValue={dropValue}
                >
                  Region 2
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link
                  to="/region"
                  value="3"
                  // onClick={event => setDropValue(event.target.value)}
                  // saveDropValue={dropValue}
                >
                  Region 3
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link
                  to="/region"
                  value="4"
                  // onClick={event => setDropValue(event.target.value)}
                  // saveDropValue={dropValue}
                >
                  Region 4
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link
                  to="/region"
                  value="5"
                  // onClick={event => setDropValue(event.target.value)}
                  // saveDropValue={dropValue}
                >
                  Final Four/Championship
                </Link>
              </DropdownItem> */}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default RegionDropdown;
