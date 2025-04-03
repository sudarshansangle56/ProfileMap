import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [userType, setUserType] = useState(null); // 'admin' or 'user'

  return (
      <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/details" className="hover:text-gray-400">User</Link>
          <Link to="/create" className="hover:text-gray-400">Create</Link>
          <Link to="/update" className="hover:text-gray-400">update</Link>
     
          
        </div>
        <div>
          {userType === 'admin' ? (
            <Link to="/admin-dashboard" className="hover:text-gray-400">Admin Dashboard</Link>
          ) : userType === 'user' ? (
            <Link to="/user-dashboard" className="hover:text-gray-400">User Dashboard</Link>
          ) : (
            <Link to="/login" className="hover:text-gray-400">Login</Link>
          )}
        </div>
      </nav>

  );
}

export default Navbar;