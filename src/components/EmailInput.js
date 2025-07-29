import React, { useState } from "react";

/**
 * Email input component for quiz registration
 * Validates email format and handles form submission
 */
export default function EmailInput({ onSubmit, isLoading }) {
  // State for email input and validation error
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Handle form submission with email validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if email format is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    // Clear error and submit email
    setError("");
    onSubmit(email);
  };

  // Clear email input and any errors
  const clearEmail = () => {
    setEmail("");
    setError("");
  };return (
    <div className="email-input-component">
      <form onSubmit={handleSubmit} className="email-form">
        {/* Header section with title and description */}
        <div className="email-header">
          <h2 className="email-title">Ready to Begin?</h2>
          <p className="email-description">
            Enter your email to start your quiz journey
          </p>
        </div>
        
        {/* Email input field with icon and clear button */}
        <div className={`input-wrapper ${error ? 'error' : ''}`}>
          <div className="input-icon">
            @
          </div>
          <input
            type="email"
            id="email"
            className={`email-field ${email ? 'has-value' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            disabled={isLoading}
            required
          />
          <label htmlFor="email" className="email-label">
            Email Address
          </label>
          {/* Clear button - only show when email has content */}
          {email && !isLoading && (
            <button
              type="button"
              className="clear-email-btn"
              onClick={clearEmail}
              aria-label="Clear email"
            >
              ×
            </button>
          )}
        </div>
        
        {/* Error message display */}
        {error && (
          <div className="email-error">
            <span className="error-icon">!</span>
            {error}
          </div>
        )}
        
        {/* Submit button with loading state */}
        <button 
          type="submit" 
          className={`submit-btn ${isLoading ? 'loading' : ''}`}
          disabled={isLoading || !email}
        >
          {isLoading ? (
            <>
              <div className="loading-spinner"></div>
              <span className="btn-text">Preparing...</span>
            </>
          ) : (
            <span className="btn-text">Launch Quiz</span>
          )}
        </button>
      </form>
    </div>
  );
}
