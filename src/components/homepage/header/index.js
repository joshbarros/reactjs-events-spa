import React from 'react';
import './style.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="App-header">
      <h1>WP Events 1.0</h1>
      <button onClick={toggleDarkMode} className="theme-toggle-btn">
        <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
      </button>
    </header>
  );
};

export default Header;
