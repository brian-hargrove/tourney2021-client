import React, { useState, useEffect } from 'react';

const SchoolGet = props => {
  const getCollege = (event, school) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/team/school/${props.college}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(college => {
        setCollege(college);
        console.log(college);
      });
  };
};
