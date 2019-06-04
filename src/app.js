import React, { useState, useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import NavbarSm from './components/navbar-sm';
import Navbar from './components/navbar';
import PageHeader from './components/page-header';
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';
import Services from './pages/services';
import Attributions from './pages/attributions';

import './app.css';

function App() {
  const [viewportWidth, setViewportWidth] = useState(
    () => Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  );

  useEffect(() => {
    const onResize = () => {
      const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

      setViewportWidth(w);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  return (
    <HashRouter basename='/'>
      <div className='app'>
        <Sidebar />
        <NavbarSm />
        <div>
          <Navbar />
          <PageHeader />
          <Route exact path='/' component={Home} />
          <Route path='/about' render={
            props => <About {...props} viewportWidth={viewportWidth} />
          }/>
          <Route path='/work' component={Work} />
          <Route path='/services' component={Services} />
          <Route path='/attributions' component={Attributions} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
