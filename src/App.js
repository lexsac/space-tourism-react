import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={ <Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
