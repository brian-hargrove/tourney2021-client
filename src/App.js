import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import TeamIndex from './components/TeamIndex';
import ScoreTable from './components/Schedule';
import TeamLineup from './components/SchoolTable';
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
import CollegeIndex from './components/CollegeIndex';
import March18 from './views/Days/March18';
import March19 from './views/Days/March19';
import March20 from './views/Days/March20';
import March21 from './views/Days/March21';
import March22 from './views/Days/March22';
import March27 from './views/Days/March27';
import March28 from './views/Days/March28';
import March29 from './views/Days/March29';
import March30 from './views/Days/March30';
import April03 from './views/Days/April03';
import April05 from './views/Days/April05';
import Calendar from './components/Calendar';

import ScheduleCreate from './components/ScoreScheduleCreate';
import TeamInput from './components/teamInput';
function App() {
  return (
    <>
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
          <Route
            path="/site/assemblyhall"
            exact
            component={AssemblySiteTable}
          />
          <Route path="/collegeinfo" exact component={CollegeIndex} />
          <Route path="/march18" exact component={March18} />
          <Route path="/march19" exact component={March19} />
          <Route path="/march20" exact component={March20} />
          <Route path="/march21" exact component={March21} />
          <Route path="/march22" exact component={March22} />
          <Route path="/march27" exact component={March27} />
          <Route path="/march28" exact component={March28} />
          <Route path="/march29" exact component={March29} />
          <Route path="/march30" exact component={March30} />
          <Route path="/april03" exact component={April03} />
          <Route path="/april05" exact component={April05} />
          <Route path="/calendar" exact component={Calendar} />
          <Route path="/schedulecreate" exact component={ScheduleCreate} />
          <Route path="/teaminput" exact component={TeamInput} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
