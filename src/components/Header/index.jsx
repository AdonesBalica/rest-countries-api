import React from 'react';
import './styles.css';

function Header() {
  return (
    <header className="header--container">
      <div className="header--logo">
        <h1>Where in the world?</h1>
      </div>
      <div className="header--darkmode">Dark Mode</div>
    </header>
  );
}

export default Header;
