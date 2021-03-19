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

  return (
    <div>
      <div className="dropdown">
        <div>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Schedule by Site/Region</DropdownToggle>
            <DropdownMenu id="regionDropdown">
              <DropdownItem>
                <Link to="/region/east" value="east">
                  East Region
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/region/midwest" value="midwest">
                  Midwest Region
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/region/south" value="South">
                  South Region
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/region/west" value="west">
                  West Region
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/region/finalfour" value="finalfour">
                  Final Four/Championship
                </Link>
              </DropdownItem>
              <DropdownItem divider />

              <DropdownItem>
                <Link
                  to="/site/bankerslifefieldhouse"
                  value="bankersLifeFieldhouse"
                >
                  Bankers Life Fieldhouse
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link
                  to="/site/indianafarmerscoliseum"
                  value="indianaFarmersColiseum"
                >
                  Indiana Farmers Coliseum
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/site/hinklefieldhouse" value="hinkle">
                  Hinkle Fieldhouse
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/site/lucasoilstadium" value="lucasoilstadium">
                  Lucas Oil Stadium
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/site/mackeyarena" value="mackeyarena">
                  Mackey Arena
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/site/assemblyhall" value="assemblyhall">
                  Simon Skjodt Assembly Hall
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default RegionDropdown;
