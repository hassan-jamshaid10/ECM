import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 font-inter"> {/* Increased top and bottom padding */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4"> {/* Increased gap between columns */}
        
        {/* Exclusive Section */}
        <div>
          <h3 className="bold text-lg font-semibold mb-6">UrbanThreads</h3> {/* Increased bottom margin */}
          <p className="mb-6">Subscribe</p> {/* Increased bottom margin */}
          <p className="text-sm mb-6">Get 10% off your first order</p> {/* Increased bottom margin */}
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border border-white p-2 text-sm flex-grow"
            />
            <button className="bg-white text-black px-4 py-2 ml-2">
              &gt;
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Support</h3> {/* Increased bottom margin */}
          <p className="text-sm mb-4">Lahore, Pakistan.</p>
          <p className="text-sm mb-4">UrbanThreads@gmail.com</p>
          <p className="text-sm">+92-312-0000188</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Account</h3> {/* Increased bottom margin */}
          <ul className="space-y-4 text-sm"> {/* Increased space between list items */}
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Link</h3> {/* Increased bottom margin */}
          <ul className="space-y-4 text-sm"> {/* Increased space between list items */}
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto text-center mt-12 border-t border-gray-800 pt-6 text-sm"> {/* Increased top margin */}
        <p>&copy; {new Date().getFullYear()} UrbanThreads | Designed By Hassan</p>
      </div>
    </footer>
  );
};

export default Footer;
