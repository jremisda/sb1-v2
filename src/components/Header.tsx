import React from 'react';
import { Bell, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="h-header bg-bg-white shadow-light flex items-center justify-between px-6">
      <div className="flex items-center">
        <span className="text-h3 font-bold text-primary">Ahvoila</span>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-secondary">
          {darkMode ? <Sun className="text-accent-warning w-6 h-6" /> : <Moon className="text-text-light w-6 h-6" />}
        </button>
        <Bell className="text-text-light w-6 h-6" />
      </div>
    </header>
  );
};

export default Header;