import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCategory } from 'react-icons/bi';
import { FaCartShopping } from 'react-icons/fa6';
import { FaStore } from 'react-icons/fa';
import { IoBagCheckSharp } from "react-icons/io5";

const Navbar = ({ setActiveSection, onSearch }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const categories = ['All Categories', 'Beauty', 'Fragrances', 'Furniture', 'Groceries'];
  const navigate = useNavigate();
  

  const dropdownRef = useRef(null);
  
  const handleCategoryClick = (category) => {
    setActiveSection(category.toLowerCase());
    navigate('/'); 
    setDropdownOpen(false);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center relative">
      <div className="text-xl font-bold flex items-center gap-2">
        <FaStore />
        <Link to="/">MyStore</Link>
      </div>


      <div className="flex items-center gap-6">
     
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-2 hover:text-gray-300 transition"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <BiCategory size={20} />
            Categories
          </button>
          {dropdownOpen && (
            <ul className="absolute bg-white text-black shadow-md rounded-md mt-2 w-48">
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

        <Link to="/cart" className="flex items-center gap-2 hover:text-gray-300 transition">
          <FaCartShopping size={20} />
          Cart
        </Link> 

        <Link to="/myorders" className="flex items-center gap-2 hover:text-gray-300 transition">
          <IoBagCheckSharp size={20} />
          My-Orders
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
