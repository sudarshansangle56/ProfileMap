import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../components/Footer';

function Create({ addProfile }) {
  const [profile, setProfile] = useState({
    username: '',
    description: '',
    location: '',
    image: ''
  });

  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(profile); // Pass new profile to App state
    setProfile({ username: '', description: '', location: '', image: '' });

    navigate('/'); // Redirect to home after creating profile
  };

  return (
    <div>
            <Navbar/>
    <div className="flex justify-center items-center min-h-screen">

      <div className='bg-white p-6 rounded-md shadow-lg w-96'>
        <h2 className='text-xl font-semibold text-center mb-4'>Create Profile</h2>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <input type="text" name="username" placeholder="Username" value={profile.username} onChange={handleChange} className='border p-2 rounded-md mb-3' required />
          <input type="text" name="description" placeholder="Description" value={profile.description} onChange={handleChange} className='border p-2 rounded-md mb-3' required />
          <input type="text" name="location" placeholder="Location" value={profile.location} onChange={handleChange} className='border p-2 rounded-md mb-3' required />
          <input type="text" name="image" placeholder="Image URL" value={profile.image} onChange={handleChange} className='border p-2 rounded-md mb-3' />
          <button type="submit" className='bg-blue-500 text-white py-2 rounded-md'>Create</button>

        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Create;
