import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, fetchProducts } from '../../Features/SearchSlice';
import { FaSearch, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';

const Header = () => {
  const dispatch = useDispatch();
  const { query, products, status } = useSelector((state) => state.search);

  const [currentTab, setCurrentTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

  const handleSearchChange = (e) => {
    const searchQuery = e.target.value;
    dispatch(setQuery(searchQuery));
  };

  useEffect(() => {
    if (query.length > 2) {
      dispatch(fetchProducts(query));
    }
  }, [query, dispatch]);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setIsMenuOpen(false); // Close menu after selection on mobile
  };

  const toggleSearchDropdown = () => {
    setIsSearchDropdownOpen((prev) => !prev);
  };

  return (
    <header className="w-full border-b border-gray-300 font-inter">
      {/* Top banner */}
      <div className="bg-black text-white text-sm flex justify-center px-4 py-2 text-center">
        <p>
          Summer Sale And Free Express Delivery {' '}
          <a href="#" className="underline">Shop Now</a>
        </p>
      </div>

      {/* Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 px-6">
        <div 
          className="text-2xl font-bold cursor-pointer"
          onClick={toggleSearchDropdown} // Toggle search dropdown when logo is clicked
        >
          UrbanThreads
        </div>

        {/* Hamburger Icon for mobile */}
        <FaBars 
          className="sm:hidden hover:text-gray-700 cursor-pointer" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        />

        {/* Navigation links */}
        <nav className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0 ${isMenuOpen ? 'flex' : 'hidden sm:flex'}`}>
          {['Home', 'Shop', 'About', 'Contact'].map((tab) => (
            <a
              key={tab}
              href="#"
              onClick={() => handleTabChange(tab)}
              className={`${
                currentTab === tab ? 'border-b-2 border-black' : ''
              }`}
            >
              {tab}
            </a>
          ))}
        </nav>

        {/* Search Bar for larger screens */}
        <div className="relative flex items-center mt-4 sm:mt-0">
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-full py-2 px-4 pl-10 w-full sm:w-80 hidden sm:block"
            placeholder="What are you looking for?"
          />
          <FaSearch className="absolute left-3 text-gray-500 hidden sm:block" />
        </div>

        {/* Icons and Sign Up/Login */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-xl mt-4 sm:mt-0">
          <FaHeart className="hover:text-gray-700 cursor-pointer" />
          <FaShoppingCart className="hover:text-gray-700 cursor-pointer" />
          <a href="#" className="text-sm sm:text-lg hover:underline">Sign Up</a>
        </div>
      </div>

      {/* Search Dropdown for mobile */}
      {isSearchDropdownOpen && (
        <div className="flex justify-center mt-2">
          <div className="relative flex items-center w-full">
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded-full py-2 px-4 pl-10 w-full"
              placeholder="What are you looking for?"
            />
            <FaSearch className="absolute left-3 text-gray-500" />
          </div>
        </div>
      )}

      {/* Search Results */}
      {status === 'loading' && <p className="text-center text-gray-500">Loading...</p>}
      {status === 'succeeded' && (
        <div className="bg-white p-4 shadow-lg">
          {Array.isArray(products) && products.length > 0 ? (
            <ul>
              {products.map((product) => (
                <li key={product.id} className="border-b py-2">
                  {product.name} - ${product.price}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </div>
      )}
      {status === 'failed' && <p className="text-center text-red-500">Error loading products.</p>}
    </header>
  );
};

export default Header;
