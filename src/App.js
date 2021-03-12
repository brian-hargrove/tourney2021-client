import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
// import TeamInput from './components/teamInput';
import TeamIndex from './components/TeamIndex';
import ScoreTable from './components/Schedule';
import TeamLineup from './views/Team';
// import TeamTable from './components/TeamTable';
// import ScheduleCreate from './components/ScoreScheduleCreate';
// import ScheduleUpdate from './components/ScoreScheduleUpdate';
// import ScheduleTable from './components/ScoreScheduleTable';
import ScheduleIndex from './components/ScheduleIndex';
import RegionTable from './views/Region';

// import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/region" exact component={RegionTable} />
        <Route path="/teamlineup" exact component={TeamLineup} />
        <Route path="/schedule" exact component={ScoreTable} />
        <Route path="/teamTable" exact component={TeamIndex} />
        <Route path="/scheduleTable" exact component={ScheduleIndex} />
        {/* <Route path="/" exact component={} /> */}
        {/* <Route path="/" exact component={} /> */}
      </Switch>
    </Router>
  );
}

export default App;
