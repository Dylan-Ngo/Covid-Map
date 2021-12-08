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
            <Link to="https://coviddashboard-team2DE.netlify.app/">COUNTRY INFO</Link>
          </li>
          <li>
            <Link to="https://www.vaccines.gov/search/">GET VACCINE</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
