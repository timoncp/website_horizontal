import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

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
      <div className='App'>
        <Sidebar />
        <div>
          <Navbar />
          <MiddleNav />
          <Switch>
            <Home />
            <About />
            <Work />
            <Services />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
