import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

// import TeamInput from './components/teamInput';
// import TeamIndex from './components/TeamIndex';
import ScoreTable from './components/Schedule';
// import TeamTable from './components/TeamTable';
// import ScheduleCreate from './components/ScoreScheduleCreate';
// import ScheduleUpdate from './components/ScoreScheduleUpdate';
// import ScheduleTable from './components/ScoreScheduleTable';
// import ScheduleIndex from './components/ScheduleIndex';

// import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <TeamIndex /> */}
      <ScoreTable />
      {/* <TeamTable /> */}
      {/* <TeamInput /> */}
      {/* <ScheduleCreate /> */}
      {/* <ScheduleUpdate /> */}
      {/* <ScheduleTable /> */}
      {/* <ScheduleIndex /> */}
    </Router>
  );
}

export default App;
