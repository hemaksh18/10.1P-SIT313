import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mail.css';

function EmailBanner() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Validation: Check if the email is empty
    if (email.trim() === '') {
      setError('Please enter an email address');
      return;
    }

    // Validation: Check if the email is valid
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        setError("");
        console.log("Email sent successfully!");
        // Redirect to the "thank you" page
        navigate('/thank-you');
      } else {
        setError("Error sending email: " + response.statusText);
      }
    } catch (error) {
      setError("Error sending email: " + error.message);
    }
  };

  // Validation function to check if the email is valid
  const isValidEmail = (email) => {
    // You can implement a more sophisticated email validation regex if needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="emailbox">
      <div className="emailbox-form">
        <h1>SIGN UP FOR OUR DAILY INSIDER</h1>

        <input
          id="emailInput"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(''); // Clear error message on input change
          }}
        />

        <button onClick={handleSubscribe} type="submit" className="emailbutton">
          Subscribe
        </button>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default EmailBanner;
