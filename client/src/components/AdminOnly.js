import React from "react";

const AdminOnly = (props) => {
  return (
    <div className="container-item attention" style={containerStyle}>
      <center>
        <div style={contentStyle}>
          <h1 style={headingStyle}>{props.page}</h1>
        </div>
        <p style={paragraphStyle}>Admin access only.</p>
      </center>
    </div>
  );
};

// Define your styles
const containerStyle = {
  borderColor: "#e74c3c", // Red color
  backgroundColor: "#f2dede", // Light red background
  padding: "20px", // Adjust the padding as needed
  borderRadius: "10px", // Add rounded corners
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
};

const contentStyle = {
  margin: "17px",
};

const headingStyle = {
  fontSize: "36px", // Adjust the font size
  color: "#e74c3c", // Red color
  fontFamily: "Arial, sans-serif", // Change the font family
  fontWeight: "bold", // Add bold style
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle text shadow
};

const paragraphStyle = {
  color: "#555", // Dark gray color
  fontSize: "18px", // Adjust the font size
  fontFamily: "Verdana, sans-serif", // Change the font family
};

export default AdminOnly;
