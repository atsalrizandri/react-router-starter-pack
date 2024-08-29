import React from "react";
import "../assets/style.css";
import profileImage from "../assets/profile.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="profile-container">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="text-container">
        <h2>Hi, my name is</h2>
        <h1>MUHAMMAD ATSAL RIZANDRI</h1>
        <h3>I’m Mobile Enthusiast</h3>
      </div>
      <div className="background-pattern"></div>
    </div>
  );
}

export default Home;