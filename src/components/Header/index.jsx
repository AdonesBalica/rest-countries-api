import React from 'react';
import './styles.css';
import P from 'prop-types';

//eslint-disable-next-line
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';

function Header({ darkMode, handleDarkMode }) {
  return (
    <header className={`header--container ${darkMode ? 'darkMode' : ''}`}>
      <div className="header--logo">
        <h1>Where in the world?</h1>
      </div>
      <div className="header--darkmode">
        {darkMode === false ? (
          <MdOutlineDarkMode onClick={() => handleDarkMode()} className="header--icon--dark" />
        ) : (
          <MdDarkMode className="header--icon--dark" onClick={() => handleDarkMode()} />
        )}
        Dark Mode
      </div>
    </header>
  );
}

Header.propTypes = {
  handleDarkMode: P.func,
  darkMode: P.bool,
};

export default Header;
