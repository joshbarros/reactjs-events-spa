import React, { useState } from 'react';
import './App.css';
import Header from './components/homepage/header';
import Content from './components/homepage/content';
import Footer from './components/homepage/footer';

function App() {
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handles event selection to open the modal
  const handleEventSelect = (eventId) => {
    setSelectedEventId(eventId);
  };

  // Closes the modal
  const handleModalClose = () => {
    setSelectedEventId(null);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Content
        selectedEventId={selectedEventId}
        onEventSelect={handleEventSelect}
        onModalClose={handleModalClose}
      />
      <Footer />
    </div>
  );
}

export default App;
