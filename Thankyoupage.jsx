import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Thankyoupage.css'; // Import the CSS file

function ThankYouPage() {
  return (
    <div className="thank-you-container">
      <h1 className="thank-you-heading">Thank You for Subscribing!</h1>
      <p className="thank-you-message">We appreciate your subscription.</p>
      <Link to="/"> {/* Link to the home page */}
        <button className="return-button">Return to Home</button>
      </Link>
    </div>
  );
}

export default ThankYouPage;
