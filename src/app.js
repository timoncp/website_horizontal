import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import MiddleNav from './components/middle-nav';
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';
import Services from './pages/services';

import './app.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Sidebar />
        <div>
          <Navbar />
          <MiddleNav />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/services' component={Services} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
