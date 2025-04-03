import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

function ProfileDetails({ profiles }) {
  const { username } = useParams();
  const user = profiles.find((profile) => profile.username === username);

  if (!user) {
    return (
      <div>
        <Navbar />
        <h2 className="text-center text-white mt-5">Profile not found.</h2>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="h-auto text-white bg-gray-900 min-w-[300px] min-h-screen p-5 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          {user.username}'s Profile
        </h1>
        <div className="p-6 rounded-lg shadow-lg w-96 text-center">
          <img
            className="w-full   h-[250px] rounded-2xl object-cover"
            src={user.image || "https://via.placeholder.com/250"}
            alt={user.username}
          />
          <h2 className="text-lg font-semibold mt-3">{user.username}</h2>
          <p>Description: {user.description}</p>
          <h3>Location: {user.location}</h3>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default ProfileDetails;
