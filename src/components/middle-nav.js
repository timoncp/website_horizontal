import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import './middle-nav.css';
import TimoJPG from '../assets/portrait.jpg';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';

const paths = ['/', '/about', '/work', '/services'];

function MiddleNav(props) {

  const goForward = function() {
    const i = paths.indexOf(props.location.pathname) + 1;
    const next = paths[i] || '/services';

    return props.history.push(next);
  }

  const goBackward = function() {
    const i = paths.indexOf(props.location.pathname) - 1;
    const next = paths[i] || '/';

    return props.history.push(next);
  }

  return (
    <div className='middle-nav'>
      <img className={classNames('middle-nav-arrow', {
        dimmed: props.location.pathname === paths[0]
      })}
        src={ArrowLeft}
        onClick={goBackward}
      />
      <img className='middle-nav-center' src={TimoJPG} />
      <img className={classNames('middle-nav-arrow', {
        dimmed: props.location.pathname === paths[3]
      })}
        src={ArrowRight}
        onClick={goForward}
      />
    </div>
  );
}

export default withRouter(MiddleNav);
