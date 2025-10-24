//src/Navbar.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">TaskManager</a>
      </div>
      <div className="flex-none space-x-3">
        <button className="btn btn-primary btn-sm">Login</button>
        <button className="btn btn-secondary btn-sm">Register</button>
        <button
            onClick={toggleTheme}
            className="btn btn-circle btn-ghost border border-base-400"
            aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
