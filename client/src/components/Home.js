import React from "react";
import Navbar from "./Navbar/Navigation";
import NavbarAdmin from "./Navbar/NavigationAdmin";
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
