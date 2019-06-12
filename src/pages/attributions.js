import React from 'react';
import { Link } from 'react-router-dom';

import Box from '../shared/box';
import Url from '../shared/url';

import MazeSVG from '../assets/maze.svg';
import ComputerSVG from '../assets/computer.svg';
import ServerSVG from '../assets/server.svg';
import DatabaseSVG from '../assets/database.svg';
import MobileSVG from '../assets/mobile.svg';
import DocumentSVG from '../assets/document.svg';

import './page.css';
import './attributions.css';

function Attributions() {
  return (
    <div className='page attributions'>
      <Box title='Attributions' imagePosition='none'>
        This website is created entirely by myself using React 16, CSS3 and Google Fonts. The entire webpage code
        can be found <Url href='https://www.github.com/timoncp/website' important>here</Url>.<br /><br />
        However, there are a few graphics/icons I have used under
        the <Url href='https://en.wikipedia.org/wiki/Creative_Commons'>Creative Commons license</Url> on the <Link to='services'>services page</Link>.
        The authors have kindly asked to be credited.<br /><br /><br />

        <img src={MazeSVG} alt='Maze' />
        <img src={ComputerSVG} alt='Computer' />
        <img src={DocumentSVG} alt='Resume' /><br />
        Icons made by <Url href='https://www.freepik.com'>Freepik</Url> from <Url href='https://www.flaticon.com'>www.flaticon.com</Url> is licensed by <Url href='http://creativecommons.org/licenses/by/3.0/'>CC 3.0 BY</Url>.<br /><br /><br />

        <img src={ServerSVG} alt='Server' />
        <img src={DatabaseSVG} alt='Database' />
        <img src={MobileSVG} alt='Mobile' /><br />
        Icons made by <Url href='https://www.flaticon.com/authors/smashicons'>Smashicons</Url> from <Url href='https://www.flaticon.com'>www.flaticon.com</Url> is licensed by <Url href='http://creativecommons.org/licenses/by/3.0/'>CC 3.0 BY</Url>.<br />
      </Box>
    </div>
  );
}

export default Attributions;
