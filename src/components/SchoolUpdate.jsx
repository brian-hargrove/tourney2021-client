import React, { useState, useEffect } from 'react';
import APIURL from '../helpers/environment';

const SchoolGet = props => {
  const getCollege = (event, school) => {
    event.preventDefault();
    fetch(`${APIURL}/team/school/${props.college}`, {
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
