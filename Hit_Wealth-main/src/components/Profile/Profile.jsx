import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    contact: '',
    profilePicture: '',
    portfolioValue: '',
    investmentGoal: '',
    riskTolerance: 'Medium',
    preferredInvestmentType: '',
    annualIncome: '',
    financialAdvisor: '',
    taxBracket: '',
  });

  useEffect(() => {
    // Check if user is logged in
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('Please login first!');
      navigate('/login');
    }

    // Get username from localStorage
    const username = localStorage.getItem('username');
    if (username) {
      setProfile(prev => ({ ...prev, email: username }));
    }
  }, [navigate]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        alert('Please login first!');
        return;
      }
      
      await axios.post('http://localhost:3000/api/profile', {
        userId,
        ...profile
      });
      
      alert('Profile saved successfully!');
      navigate('/stocks'); // Navigate to stocks page after profile completion
    } catch (error) {
      console.error('Error saving profile data: ', error);
      alert('Failed to save profile!');
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <h2>Complete Your Profile</h2>
        <p className="profile-subtitle">Please provide your information to personalize your investment experience</p>

        <div className="profile-form">
          <div className="profile-section">
            <h3>Personal Information</h3>
            <div className="profile-field">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="profile-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter your email"
                disabled
              />
            </div>

            <div className="profile-field">
              <label>Contact Number</label>
              <input
                type="tel"
                name="contact"
                value={profile.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
              />
            </div>

            <div className="profile-field">
              <label>Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {profile.profilePicture && (
                <img
                  src={profile.profilePicture}
                  alt="Profile"
                  className="profile-image-preview"
                />
              )}
            </div>
          </div>

          <div className="profile-section">
            <h3>Investment Preferences</h3>
            <div className="profile-field">
              <label>Portfolio Value (₹)</label>
              <input
                type="number"
                name="portfolioValue"
                value={profile.portfolioValue}
                onChange={handleChange}
                placeholder="Enter your portfolio value"
              />
            </div>

            <div className="profile-field">
              <label>Investment Goal</label>
              <textarea
                name="investmentGoal"
                value={profile.investmentGoal}
                onChange={handleChange}
                placeholder="Describe your investment goals"
              />
            </div>

            <div className="profile-field">
              <label>Risk Tolerance</label>
              <select
                name="riskTolerance"
                value={profile.riskTolerance}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="profile-field">
              <label>Preferred Investment Type</label>
              <input
                type="text"
                name="preferredInvestmentType"
                value={profile.preferredInvestmentType}
                onChange={handleChange}
                placeholder="E.g., Stocks, Mutual Funds, etc."
              />
            </div>

            <div className="profile-field">
              <label>Annual Income (₹)</label>
              <input
                type="number"
                name="annualIncome"
                value={profile.annualIncome}
                onChange={handleChange}
                placeholder="Enter your annual income"
              />
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <button onClick={handleSubmit} className="profile-submit-btn">Save & Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;