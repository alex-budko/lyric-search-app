import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'

import Navbar from './components/layout/Navbar.js'
import Index from './components/layout/Index.js'


function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Index />} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
