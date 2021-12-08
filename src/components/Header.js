import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Covid Map</p>
        <ul>
          <li>
            <a href="https://coviddashboard-team2DE.netlify.app/">COUNTRY INFO</a>
          </li>
          <li>
            <a href="https://www.vaccines.gov/search/" target="_blank">GET VACCINE</a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
