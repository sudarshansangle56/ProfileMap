import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

function Update({ profiles, setProfiles }) {
  const [username, setUsername] = useState("");
  const [updatedProfile, setUpdatedProfile] = useState({
    description: "",
    location: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleSearch = () => {
    const profileToEdit = profiles.find((profile) => profile.username === username);
    if (profileToEdit) {
      setUpdatedProfile(profileToEdit);
    } else {
      alert("Profile not found!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedProfiles = profiles.map((profile) =>
      profile.username === username ? updatedProfile : profile
    );
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
    alert("Profile updated successfully!");
    navigate("/");
  };

  return (
    <div className="bg-gray-900">
  <Navbar/>
    
    <div className="flex flex-col bg-gray-900 items-center justify-center min-h-screen">
      <div className="max-w-[60%] min-h-[199px] p-5 rounded-lg bg-white">
      <h2 className="text-xs p-3  text-black font-semibold  mb-4">Enter Name for edit profile</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded-md mb-3"
      />
      <button onClick={handleSearch} className="bg-blue-500 ml-3 text-white py-2 px-4 rounded-md mb-3">
        Search Profile
      </button>

      {updatedProfile.username && (
        <form onSubmit={handleUpdate} className="flex flex-col">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={updatedProfile.description}
            onChange={handleChange}
            className="border p-2 rounded-md mb-3"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={updatedProfile.location}
            onChange={handleChange}
            className="border p-2 rounded-md mb-3"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={updatedProfile.image}
            onChange={handleChange}
            className="border p-2 rounded-md mb-3"
          />
          <button type="submit" className="bg-green-500 text-white py-2 rounded-md">
            Update Profile
          </button>
        </form>
        
      )}
      </div>
    </div>
    <Footer/>
    </div>
    

  );
}

export default Update;
