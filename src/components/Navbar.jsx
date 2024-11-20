import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple",
  ]);

  //   const toggleDropdown = () => {
  //     setIsDropdownOpen(!isDropdownOpen);
  //   };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="navbar bg-slate-100 p-5 flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-4xl text-yellow-600 font-bold">
          OASIS
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-12 items-center">
          {/* Search Input */}
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2 rounded border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {searchTerm && (
              <div className="absolute bg-white text-gray-800 w-full mt-1 rounded shadow-md max-h-40 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  <ul>
                    {filteredProducts.map((product, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {product}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-2 text-gray-500">No products found.</p>
                )}
              </div>
            )}
          </div>

          {/* Other Links */}
          <li>
            <Link to="/" className="text-black text-2xl hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black text-2xl hover:text-yellow-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-black text-2xl hover:text-yellow-400"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/signUp"
              className="text-black text-2xl hover:text-yellow-400"
            >
              SignUp
            </Link>
          </li>

          {/* Account Dropdown */}
          {/* <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-black text-2xl hover:text-yellow-400"
            >
              Account
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-indigo-400 text-black rounded shadow-md">
                <li>
                  <Link
                    to="/account/profile"
                    className="block px-4 py-2 hover:bg-indigo-300"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signUp"
                    className="block px-4 py-2 hover:bg-indigo-300"
                  >
                    SignUp
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account/logout"
                    className="block px-4 py-2 hover:bg-indigo-300"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
