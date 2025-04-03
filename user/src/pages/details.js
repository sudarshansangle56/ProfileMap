import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './Navbar';

function Details({ profiles }) {
  const [sortedProfiles, setSortedProfiles] = useState([...profiles]);
  const navigate = useNavigate(); // Initialize navigation

  // Function to sort profiles by name
  const sortByName = () => {
    const sorted = [...sortedProfiles].sort((a, b) => a.username.localeCompare(b.username));
    setSortedProfiles(sorted);
  };

  return (
    <div>
      <Navbar />
      <div className='h-auto bg-gray-900 min-w-[300px] min-h-screen p-5'>
        <h1 className="text-3xl font-bold text-white text-center mb-6">All Profiles</h1>
        
        <div className="flex justify-center mb-5">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={sortByName}
          >
            Sort by Name
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {sortedProfiles.length > 0 ? (
            sortedProfiles.map((user, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-80">
                <img 
                  className="w-full h-[250px] rounded-2xl object-cover"
                  src={user.image || "https://via.placeholder.com/250"}
                  alt={user.username}
                />
                <div className="text-center mt-3">
                  <h2 className="text-lg font-semibold">{user.username}</h2>
                  <p>Description: {user.description}</p>
                  <h3>Location: {user.location}</h3>
                  <button 
                    className="mt-2 bg-red-500 text-white px-4 py-1 rounded-lg"
                    onClick={() => navigate(`/profile/${user.username}`)} // Navigate to profile details page
                  >
                    View More
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center">No profiles available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
