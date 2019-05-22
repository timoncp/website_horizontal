import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import SidebarSm from './components/sidebar-sm';
import Navbar from './components/navbar';
import MiddleNav from './components/middle-nav';
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';
import Services from './pages/services';

import './app.css';

function App() {
  const [viewportWidth, setViewportWidth] = useState(
    () => Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  );

  useEffect(() => {
    const onResize = () => setViewportWidth(Math.max(document.documentElement.clientWidth, window.innerWidth || 0))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  });

  return (
    <BrowserRouter>
      <div className='app'>
      { viewportWidth >= 1024 ? <Sidebar /> : <SidebarSm /> }
        <div>
          { (viewportWidth >= 1024) && <Navbar /> }
          { (viewportWidth >= 1024) && <MiddleNav /> }
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
