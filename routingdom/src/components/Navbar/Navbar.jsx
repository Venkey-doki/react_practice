import React, { useState } from 'react';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', hasDropdown: true },
    { label: 'About', hasDropdown: true },
    { label: 'Events', hasDropdown: true },
    { label: 'Workshop', hasDropdown: true },
    { label: 'Contests' },
    { label: 'Sponsors' },
    { label: 'Gallery' },
    { label: 'Contact Us' },
    { label: 'Accommodation' },
  ];

  return (
    <nav className="w-full bg-black px-6 py-4">
      <div className="max-w-10xl mx-auto flex items-center justify-between">
        {/* Logo - Fixed Left */}
        <div className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
          <img src={logo} height={70} width={100} alt="Logo" />
          <span className="text-white font-bold text-xl ml-2">ZEITGIEST'25</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Items - Centered */}
      <div
        className={`lg:flex lg:items-center lg:space-x-6 ${
          isMenuOpen ? 'block' : 'hidden'
        } w-full lg:w-auto mt-4 lg:mt-0`}
      >
        <div className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                className={`flex items-center text-gray-300 hover:text-red-500 transition-colors duration-200 ${
                  hoveredItem === item.label ? 'text-red-500' : ''
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      hoveredItem === item.label ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Login Button */}
      {isMenuOpen && (
        <div className="mt-4 flex justify-center lg:hidden">
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 hover:text-red-500 transition-all duration-200">
            Log in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
