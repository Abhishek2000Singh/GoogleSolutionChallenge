// FundraisingDashboard.js

import React, { useState } from 'react';
import './App.css';

const UserProfileForm = () => {
  const [selectedOption, setSelectedOption] = useState('personal'); // Default to updating personal details

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="container">
      <h2>User Profile</h2>
      <div>
        <label>Select an option:</label>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="personal">Update Personal Details</option>
          <option value="professional">Update Professional Details</option>
          <option value="contribution">Make a Contribution</option>
        </select>
      </div>

      {selectedOption === 'personal' && <PersonalDetailsForm />}
      {selectedOption === 'professional' && <ProfessionalDetailsForm />}
      {selectedOption === 'contribution' && <ContributionForm />}
    </div>
  );
};

const PersonalDetailsForm = () => {
  // Add fields for personal details
  return (
    <form>
      <div className="profile-section">
        <label>First Name:</label>
        <input type="text" />
      </div>
      <div className="profile-section">
        <label>Last Name:</label>
        <input type="text" />
      </div>
      <div className="profile-section">
        <label>Email:</label>
        <input type="email" />
      </div>
      <button type="submit">Update Personal Details</button>
    </form>
  );
};

const ProfessionalDetailsForm = () => {
  // Add fields for professional details
  return (
    <form>
      <div className="profile-section">
        <label>Occupation:</label>
        <input type="text" />
      </div>
      <div className="profile-section">
        <label>Skills:</label>
        <input type="text" />
      </div>
      <div className="profile-section">
        <label>Interests:</label>
        <input type="text" />
      </div>
      <div className="profile-section">
        <label>Passions:</label>
        <input type="text" />
      </div>
      <div className="profile-section">
        <label>Project Type:</label>
        <input type="text" />
      </div>
      <button type="submit">Update Professional Details</button>
    </form>
  );
};

const ContributionForm = () => {
  // Add fields for contribution
  return (
    <form>
      <div className="profile-section">
        <label>Contribution Details:</label>
        <textarea rows="4" cols="50"></textarea>
      </div>
      <button type="submit">Submit Contribution</button>
    </form>
  );
};
const FundraisingDashboard = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [contributionType, setContributionType] = useState('payment');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <div className="container">Home Page Content</div>;
      case 'profile':
        return <UserProfileForm />;
      case 'about':
        return <div className="container">About Us Page Content</div>;
      case 'contact':
        return <div className="container">Contact Us Page Content</div>;
      case 'contribution':
        return renderContributionPage();
      default:
        return null;
    }
  };

  const renderContributionPage = () => (
    <div className="container">
      <h2>Contribution Options</h2>
      <div>
        <label>Choose Contribution Type:</label>
        <select value={contributionType} onChange={(e) => setContributionType(e.target.value)}>
          <option value="payment">Payment</option>
          <option value="skills">Skills</option>
        </select>
      </div>
      {contributionType === 'payment' ? renderPaymentForm() : renderSkillsContributionForm()}
    </div>
  );

  const renderPaymentForm = () => (
    <div>
      <h3>Payment Contribution</h3>
      <form>
        <label>Payment Method:</label>
        <select>
          <option value="credit-card">Credit Card</option>
          <option value="debit-card">Debit Card</option>
          <option value="online-wallet">Online Wallet</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>
        <br />
        <label>Amount:</label>
        <input type="number" />
        <br />
        <button type="submit" onClick={() => alert("Payment submitted!")}>
          Submit Payment
        </button>
      </form>
    </div>
  );

  const renderSkillsContributionForm = () => (
    <div>
      <h3>Skills, Passion, and Interest Contribution</h3>
      <form>
        <label>Skills:</label>
        <input type="text" />
        <br />
        <label>Passion:</label>
        <input type="text" />
        <br />
        <label>Interests:</label>
        <input type="text" />
        <br />
        <label>How can you support the project?</label>
        <textarea rows="4" cols="50"></textarea>
        <br />
        <button type="submit" onClick={() => alert("Contribution submitted!")}>
          Submit Contribution
        </button>
      </form>
    </div>
  );

  return (
    <div>
      <header>
        <h1>Fundraising Dashboard</h1>
      </header>
      <nav>
        <a href="#" onClick={() => setCurrentPage('home')}>Home</a>
        <a href="#" onClick={() => setCurrentPage('profile')}>User Profile</a>
        <a href="#" onClick={() => setCurrentPage('about')}>About</a>
        <a href="#" onClick={() => setCurrentPage('contact')}>Contact Us</a>
        <a href="#" onClick={() => setCurrentPage('contribution')}>Contribution</a>
      </nav>
      {renderPage()}
    </div>
  );
};

export default FundraisingDashboard;
