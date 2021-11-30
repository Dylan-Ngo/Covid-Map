import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>Sources: <a href="https://www.colbyfayock.com/2020/03/how-to-create-a-coronavirus-covid-19-dashboard-map-app-with-gatsby-and-leaflet">COVID-19 Dashboard and Map App with Gatsby and Leaflet</a></p>
        <p>&copy; { new Date().getFullYear() }, Team 2DE</p>
      </Container>
    </footer>
  );
};

export default Footer;
