import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/profile";
import Create from "./pages/Create";
import Details from "./pages/details";
import Login from "./pages/Login";
import Update from "./pages/Update";
import ProfileDetails from "./pages/ProfileDetails";

function Home({ profiles, deleteProfile }) {
  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[400px] bg-gray-900">
        <h1 className="text-4xl font-bold text-white">Profile Tracker 🚀</h1>
        <p className="p-2 mt-3 w-[60%] text-white">Profile Map is a platform where users can create, update, and delete profiles seamlessly. Users can add new profiles with details like name, description, location, and an image. The update feature allows modifying profile information, while the delete functionality enables removing profiles instantly. All changes are saved in localStorage, ensuring data persistence. The platform provides a smooth and interactive user experience with a responsive UI built using **React and Tailwind CSS. 🚀</p>
      </div>
      <div className="w-screen flex gap-5 flex-wrap p-5 items-center justify-center bg-gray-900">
        {profiles.map((user, index) => (
          <Profile key={index} user={user} deleteProfile={deleteProfile} />
        ))}
      </div>
      <Footer />
    </div>
  );
}


function App() {
  const [profiles, setProfiles] = useState(() => {
    const storedProfiles = localStorage.getItem("profiles");
    return storedProfiles
      ? JSON.parse(storedProfiles)
      : [
          {
            username: "Yash Gupta",
            description: "Software Engineer",
            location: "Nashik",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  const addProfile = (newProfile) => {
    setProfiles((prev) => [...prev, newProfile]);
  };

  const deleteProfile = (username) => {
    const updatedProfiles = profiles.filter((profile) => profile.username !== username);
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home profiles={profiles} deleteProfile={deleteProfile} />} />
        <Route path="/details" element={<Details profiles={profiles} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create addProfile={addProfile} />} />
        <Route path="/update" element={<Update profiles={profiles} setProfiles={setProfiles} />} />
        <Route path="/profile/:username" element={<ProfileDetails profiles={profiles} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}


export default App;