import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={ <Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
