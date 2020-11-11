import React from 'react';
import Header from '../../components/Header/Header';
import './About.scss';

const About = () => {
  return (
    <>
    <Header /> 
      <div className="about-container">
        <h1>About This App</h1>
        <p>
          Simple React app that calls the Github Health API to display the
          status of various github services
        </p>
      </div>
    </>
  );
};
export default About;
