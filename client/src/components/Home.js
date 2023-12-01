import React from "react";
import Navbar from "./navbar/Navbar";
import NavbarAdmin from "./navbar/NavbarAdmin";
const Home = () => {
  return (
    <div>
      <NavbarAdmin />
      <div className="home">
        <div className="home-text">
          <h1>Online Voting System</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
