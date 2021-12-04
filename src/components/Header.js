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
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/page-2/">MORE DATA</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
