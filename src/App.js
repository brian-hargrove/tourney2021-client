import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
// import TeamInput from './components/teamInput';
import TeamIndex from './components/TeamIndex';
import ScoreTable from './components/Schedule';
import TeamLineup from './components/SchoolTable';
// import TeamTable from './components/TeamTable';
// import ScheduleCreate from './components/ScoreScheduleCreate';
// import ScheduleUpdate from './components/ScoreScheduleUpdate';
// import ScheduleTable from './components/ScoreScheduleTable';
import ScheduleIndex from './components/ScheduleIndex';
import RegionEastTable from './views/Region/RegionEast';
import RegionMidwestTable from './views/Region/RegionMidwest';
import RegionSouthTable from './views/Region/RegionSouth';
import RegionWestTable from './views/Region/RegionWest';
import RegionFinalFourTable from './views/Region/RegionFinalFour';
import SchoolIndex from './components/SchoolIndex';
import AssemblySiteTable from './views/Sites/AssemblySite';
import BankersSiteTable from './views/Sites/BankersLifeSite';
import IndianaFarmersSiteTable from './views/Sites/IndianaFarmers';
import MackeySiteTable from './views/Sites/MackeySite';
import LucasOilSiteTable from './views/Sites/LucasOilSite';
import HinkleSiteTable from './views/Sites/HinkleSite';

// import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/region/east" exact component={RegionEastTable} />
        <Route path="/region/midwest" exact component={RegionMidwestTable} />
        <Route path="/region/south" exact component={RegionSouthTable} />
        <Route path="/region/west" exact component={RegionWestTable} />
        <Route
          path="/region/finalfour"
          exact
          component={RegionFinalFourTable}
        />
        <Route path="/teamlineup" exact component={TeamLineup} />
        <Route path="/schedule" exact component={ScoreTable} />
        <Route path="/teamTable" exact component={TeamIndex} />
        <Route path="/scheduleTable" exact component={ScheduleIndex} />
        <Route path="/schoolinfo" exact component={SchoolIndex} />
        <Route
          path="/site/bankerslifefieldhouse"
          exact
          component={BankersSiteTable}
        />
        <Route
          path="/site/indianafarmerscoliseum"
          exact
          component={IndianaFarmersSiteTable}
        />
        <Route
          path="/site/hinklefieldhouse"
          exact
          component={HinkleSiteTable}
        />
        <Route
          path="/site/lucasoilstadium"
          exact
          component={LucasOilSiteTable}
        />
        <Route path="/site/mackeyarena" exact component={MackeySiteTable} />
        <Route path="/site/assemblyhall" exact component={AssemblySiteTable} />
      </Switch>
    </Router>
  );
}

export default App;
