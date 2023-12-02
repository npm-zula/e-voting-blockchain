import React from "react";
import NavbarAdmin from "./Navbar/NavigationAdmin";

const Home = () => {
  return (
    <div>
      <NavbarAdmin />
      <div className="home" style={homeStyle}>
        <div className="home-text">
          <h1 style={headingStyle}>Welcome to the Online Voting System</h1>
        </div>
      </div>
    </div>
  );
};

// Define your styles
const homeStyle = {
  background: 'white', // Background color for the home section
  color: '#fff', // Text color
  textAlign: 'center',
  padding: '50px', // Adjust the padding as needed
};

const headingStyle = {
  fontSize: '36px', // Adjust the font size
  fontWeight: 'bold', // Add bold style
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a subtle text shadow
};

export default Home;
