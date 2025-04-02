import "./App.css";
import Profile from "./components/profile";
import Details from "./pages/details";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function Home() {
  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex justify-center items-center h-[400px] bg-gray-900">
        <h1 className="text-4xl font-bold text-white">Tailwind CSS is Working! 🚀</h1>
      </div>
      <div className="w-screen flex gap-5 flex-wrap p-5 items-center justify-center bg-gray-900">
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
