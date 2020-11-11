import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import './Header.scss';
const Header = ({ title }) => {
  return (
    <>
      <header className="header">
        <h2 className="header-title">
          {title} <FaGithub className="header-icon" />
        </h2>
        <div className="header-container">
          <Link to="/about" className="header-link">
            About
          </Link>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {
  title: 'Github health tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
