import React from "react";

function Profile({ user, deleteProfile }) {
  return (
    <div className="h-10 bg-white min-w-[300px] min-h-[400px] mb-4 mt-4 rounded-md">
      <div className="flex justify-center items-center">
        <img
          className="w-[250px] h-[250px] rounded-2xl mt-5"
          src={user.image || "https://via.placeholder.com/250"}
          alt="User Profile"
        />
      </div>
      <div className="flex justify-center items-center flex-col mt-3">
        <h2>User-Name: {user.username}</h2>
        <p>Description: {user.description}</p>
        <h3>Location: {user.location}</h3>
        <div className="">
          <button className="h-6 mr-2 w-[100px] bg-blue-500 text-white rounded-lg">
            View More
          </button>
          <button
            className="h-6 w-[100px] bg-red-500 text-white rounded-lg"
            onClick={() => deleteProfile(user.username)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
