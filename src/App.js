import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import TeamInput from './components/teamInput';
// import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <TeamInput />
    </Router>
  );
}

export default App;
