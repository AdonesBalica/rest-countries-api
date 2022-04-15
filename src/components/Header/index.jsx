import React from 'react';
import './styles.css';

//eslint-disable-next-line
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';

function Header() {
  return (
    <header className="header--container">
      <div className="header--logo">
        <h1>Where in the world?</h1>
      </div>
      <div className="header--darkmode">
        <MdOutlineDarkMode className="header--icon--dark" />
        {/* <MdDarkMode className="header--icon--dark" /> */}
        Dark Mode
      </div>
    </header>
  );
}

export default Header;
