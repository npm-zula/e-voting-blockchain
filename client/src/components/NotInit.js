// Node module
import React from "react";

const NotInit = () => {
  // Component: Displaying election not initialize message.
  return (
    <div className="container-item info" style={containerStyle}>
      <center>
        <h3 style={headingStyle}>Oops! The election hasn't been initialized by the Admin yet.</h3>
        <p style={paragraphStyle}>
          Please wait while we prepare for the upcoming election. Our team is working diligently to ensure a seamless and exciting voting experience for you. Thank you for your patience and stay tuned for updates!
        </p>
      </center>
    </div>
  );
};

// Define your styles
const containerStyle = {
  textAlign: 'center',
  padding: '20px', // Adjust the padding as needed
};

const headingStyle = {
  textAlign: 'center',
  color: '#3498db', // Customize the color
  fontSize: '24px', // Adjust the font size
  fontWeight: 'bold', // Add any other heading styles here
};

const paragraphStyle = {
  color: '#555', // Customize the color
  fontSize: '18px', // Adjust the font size
  lineHeight: '1.6', // Adjust the line height for better readability
  maxWidth: '600px', // Set a maximum width for better text wrapping
  margin: '20px auto', // Center the paragraph horizontally with margin
  // Add any other paragraph styles here
};

export default NotInit;
