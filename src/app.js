import React from 'react';
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
  return (
    <HashRouter basename='/'>
      <div className='app'>
        <Sidebar />
        <NavbarSm />
        <div>
          <Navbar />
          <PageHeader />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About}/>
          <Route path='/work' component={Work} />
          <Route path='/services' component={Services} />
          <Route path='/attributions' component={Attributions} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
