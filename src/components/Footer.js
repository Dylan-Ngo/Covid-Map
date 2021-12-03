import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>Sources: <a href="https://www.freecodecamp.org/news/how-to-create-a-coronavirus-covid-19-dashboard-map-app-in-react-with-gatsby-and-leaflet/">How to create a Coronavirus (COVID-19) Dashboard and Map App in React with Gatsby and Leaflet</a></p>
        <p><a href="https://www.freecodecamp.org/news/how-to-add-coronavirus-covid-19-case-statistics-to-your-map-dashboard-in-gatsby-and-react-leaflet/">How to add Coronavirus (COVID-19) case statistics to your React map dashboard with Gatsby</a></p>
        <p>Team 2DE, { new Date().getFullYear() }</p>
      </Container>
    </footer>
  );
};

export default Footer;
