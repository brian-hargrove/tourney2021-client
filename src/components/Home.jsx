import React, { useState, useEffect } from 'react';
// import { Table } from 'reactstrap';
import Calendar from './Calendar';
import '../styles/home.css';

const Home = props => {
  return (
    <div className="page">
      <Calendar />
    </div>
  );
};
export default Home;
