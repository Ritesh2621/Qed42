import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCategory } from 'react-icons/bi';
import { FaCartShopping } from 'react-icons/fa6';
import { FaStore } from 'react-icons/fa';
import { IoBagCheckSharp } from "react-icons/io5";

const Navbar = ({ setActiveSection, onSearch }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const categories = ['All Categories', 'Beauty', 'Fragrances', 'Furniture', 'Groceries'];
  const navigate = useNavigate();
  
  // Reference to the dropdown button and menu
  const dropdownRef = useRef(null);
  
  const handleCategoryClick = (category) => {
    setActiveSection(category.toLowerCase());
    navigate('/'); // Navigate to the desired route, e.g., the home or product page
    setDropdownOpen(false); // Close dropdown after clicking a category
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-blue-500 text-white p-4 flex flex-col lg:flex lg:flex-row justify-between items-center relative">
      {/* Logo and store name */}
      <div className='w-full flex flex-row justify-between '>
      <div className="text-xl font-bold flex items-center gap-2">
        <FaStore />
        <Link to="/">MyStore</Link>
      </div>

      {/* Hamburger menu for mobile */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      </div>
      {/* Mobile Menu (hidden on large screens) */}
      <div className={`lg:flex lg:justify-end ${mobileMenuOpen ? 'block' : 'hidden'} flex-col items-center gap-6 w-full`}>
        {/* Mobile - Categories, Cart, My Orders */}
        <div className="flex flex-col gap-4 items-center w-full mt-4 lg:flex-row lg:justify-end lg:mt-0">
          {/* Categories with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 hover:text-gray-300 transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <BiCategory size={20} />
              Categories
            </button>
            {dropdownOpen && (
              <ul className="absolute bg-white text-black shadow-md rounded-md mt-2 w-48 z-10">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="px-4 py-2 hover:bg-blue-500 hover:text-white transition cursor-pointer"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="flex items-center gap-2 hover:text-gray-300 transition">
            <FaCartShopping size={20} />
            Cart
          </Link>

          {/* My Orders */}
          <Link to="/myorders" className="flex items-center gap-2 hover:text-gray-300 transition">
            <IoBagCheckSharp size={20} />
            My Orders
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
