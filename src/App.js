import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
// import TeamInput from './components/teamInput';
// import ScheduleCreate from './components/ScoreScheduleCreate';
import ScheduleUpdate from './components/ScoreScheduleUpdate';
// import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <ScheduleUpdate />
    </Router>
  );
}

export default App;
