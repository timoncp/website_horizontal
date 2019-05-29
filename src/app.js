import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import SidebarSm from './components/sidebar-sm';
import NavMenu from './components/nav-menu';
import PageHeader from './components/page-header';
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
    const onResize = () => setViewportWidth(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  const [scrollY, setScrollY] = useState(0);

  return (
    <BrowserRouter>
      <div className='app'>
      { viewportWidth >= 1024 ? <Sidebar /> : <SidebarSm /> }
        <div onScroll={() => setScrollY(document.getElementsByClassName('page')[0].scrollTop)}>
          { (viewportWidth >= 1024) && <NavMenu scrollY={scrollY} /> }
          { (viewportWidth >= 1024) && <PageHeader /> }
          <Route exact path='/' component={Home} />
          <Route exact path='/about' render={
            props => <About {...props} viewportWidth={viewportWidth} />
          }/>
          <Route exact path='/work' render={
            props => <Work {...props} viewportWidth={viewportWidth} />
          }/>
          <Route exact path='/services' render={
            props => <Services {...props} viewportWidth={viewportWidth} />
          }/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
