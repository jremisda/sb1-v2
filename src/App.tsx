import React, { useState, useEffect } from 'react';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`min-h-screen flex ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <LeftSidebar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isCollapsed={isCollapsed}
        toggleCollapse={toggleCollapse}
      />
      <MainContent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sidebarCollapsed={isCollapsed}
      />
    </div>
  );
}

export default App;