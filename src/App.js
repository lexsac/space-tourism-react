import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Header from './components/Header';
import './styles/App.css';

const App = () => {
  const location = useLocation();
  const [path, setPath] = useState('app__home');

  useEffect(() => {
    if (location.pathname === '/') {
        setPath('app__home')
    }

    if (location.pathname === '/destination') {
        setPath('app__destination')
    }

    if (location.pathname === '/crew') {
        setPath('app__crew')
    }

    if (location.pathname === '/technology') {
        setPath('app__technology app')
    }
}, [location.pathname])

  return (
    <div className={path}>
      {/* <Router> */}
        <Header />
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={ <Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
