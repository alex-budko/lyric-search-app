import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'

import Navbar from './components/layout/Navbar.js'
import Index from './components/layout/Index.js'
import Lyrics from './components/tracks/Lyrics.js'


import {Provider} from './context';


function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Index />} />
              <Route exact path='/lyrics/tracks/:id' element={<Lyrics />} />
            </Routes>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
