import React, { useState, useEffect } from 'react';

const CollegeDropdown = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([{ label: 'Loading...', value: '' }]);
  const [value, setValue] = useState();

  // useEffect(() => {
  //   let unmounted = false;
  //   async function getColleges() {
  //     const response = await fetch('https://localhost:3000/team');
  //     const body = await response.json();
  //     if (!unmounted) {
  //       setItems(
  //         body.results.map(({ college }) => ({
  //           label: college,
  //           value: college,
  //         }))
  //       );
  //       setLoading(false);
  //     }
  //   }
  //   getColleges();
  //   console.log(items);
  //   return () => {
  //     unmounted = true;
  //   };
  // }, []);

  useEffect(() => {
    let unmounted = false;

    setLoading(false);

    fetchCollegeDropdown();
    return () => {
      unmounted = true;
    };
  }, []);

  const fetchCollegeDropdown = async () => {
    await fetch(`http://localhost:3000/team`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(body =>
        setItems(
          body.team.map(({ college }) => ({
            label: college,
            value: college,
          }))
        )
      );
  };

  return (
    <select
      disabled={loading}
      value={value}
      onChange={event => setValue(event.currentTarget.value)}
    >
      {items.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default CollegeDropdown;
// import React, { useState } from 'react';
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';
// import '../styles/Navbar.css';

// const CollegeDropdown = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [data, setData] = useState();

//   const dropdownSchool = () => {
//     // event.preventDefault();

//     fetch('http://localhost:3000/team/', {
//       method: 'GET',
//       headers: new Headers({
//         'Content-Type': 'application/json',
//       }),
//     })
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.log(error));
//     console.log(data);
//   };

//   console.log(dropdownSchool.data);
//   const toggle = () => setDropdownOpen(prevState => !prevState);
//   // need to pull college inform from team database
//   // populate database from college column from team database

//   return (
//     <div>
//       <div>
//         <Dropdown isOpen={dropdownOpen} toggle={toggle}>
//           <DropdownToggle caret>COLLEGE</DropdownToggle>
//           <DropdownMenu id="collegeDropdown">
//             <DropdownItem header>SCHOOL LIST</DropdownItem>
//             <DropdownItem>{dropdownSchool}</DropdownItem>
//             <DropdownItem text>Dropdown Item Text</DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem>Foo Action</DropdownItem>
//             <DropdownItem>Bar Action</DropdownItem>
//             <DropdownItem>Quo Action</DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </div>
//     </div>
//   );
// };

// export default CollegeDropdown;
