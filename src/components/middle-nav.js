import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import './middle-nav.css';
import TimoJPG from '../assets/portrait.jpg';
import ArrowLeftSVG from '../assets/arrow-left.svg';
import ArrowRightSVG from '../assets/arrow-right.svg';
import ArrowRightBlackSVG from '../assets/arrow-right-black.svg';

const paths = ['/', '/about', '/work', '/services'];

function MiddleNav(props) {
  const resetNavbar = function() {
    const navbar = document.getElementsByClassName('navbar')[0];

    if (navbar !== undefined && navbar.classList.contains('scrolled')) {
      navbar.classList.remove('scrolled');
    }
  }

  const goForward = function() {
    const i = paths.indexOf(props.location.pathname) + 1;
    const next = paths[i] || '/services';

    return props.history.push(next);
  }

  const goBackward = function() {
    const i = paths.indexOf(props.location.pathname) - 1;
    const next = paths[i] || '/';

    if (next === '/') resetNavbar();

    return props.history.push(next);
  }

  let ArrowRight = props.viewportWidth < 1280 ? ArrowRightBlackSVG : ArrowRightSVG;

  return (
    <div className='middle-nav'>
      <img className={classNames('middle-nav-arrow', {
        dimmed: props.location.pathname === paths[0]
      })}
        alt='Previous Page'
        src={ArrowLeftSVG}
        onClick={goBackward}
      />
      <img className='middle-nav-center' src={TimoJPG}
        alt='Circle portrait'
      />
      <img className={classNames('middle-nav-arrow', {
        dimmed: props.location.pathname === paths[3]
      })}
      alt='Next Page'
        src={ArrowRight}
        onClick={goForward}
      />
    </div>
  );
}

export default withRouter(MiddleNav);
