import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

const ProfileInformation = () => {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) return;
        const response = await axios.get(`http://localhost:3000/api/investments/${userId}`);
        if (Array.isArray(response.data)) {
          setInvestments(response.data);
        } else {
          console.error('Invalid investments data format:', response.data);
          setInvestments([]);
        }
      } catch (error) {
        console.error('Error fetching investments:', error);
      }
    };
    fetchInvestments();
  }, []);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contact: "",
    profilePicture: "",
    portfolioValue: "",
    investmentGoal: "",
    riskTolerance: "",
    preferredInvestmentType: "",
    annualIncome: "",
    financialAdvisor: "",
    taxBracket: "",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

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

  const handleSave = async () => {
    if (isEditing) {
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
        
        alert("Profile saved!");
        navigate('/');
      } catch (error) {
        console.error("Error saving profile data: ", error);
        alert("Failed to save profile!");
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-wrapper">
      <div className="investments-section">
        <h3>My Investments</h3>
        
        {investments.length > 0 ? (
          <>
            <div className="investment-summary">
              <h4>Portfolio Summary</h4>
              <div className="summary-item">
                <span className="summary-label">Total Investments:</span>
                <span className="summary-value">{investments.length}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Stocks:</span>
                <span className="summary-value">{investments.filter(inv => inv.type === 'stock').length}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Mutual Funds:</span>
                <span className="summary-value">{investments.filter(inv => inv.type === 'mutualfund').length}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Total Value:</span>
                <span className="summary-value">
                  ${investments.reduce((total, inv) => total + (Number(inv.purchase_price) * inv.quantity), 0).toFixed(2)}
                </span>
              </div>
            </div>
            
            <ul>
              {investments.map((investment, index) => (
                <li key={index} data-type={investment.type}>
                  <strong>{investment.symbol}</strong> - {investment.quantity} shares at ${Number(investment.purchase_price).toFixed(2)}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>No investments found</p>
        )}
      </div>
      <div className="new-settings-card">
        <h2>Profile Information</h2>

        <div className="new-info">
          <label className="new-label">Name:</label>
          <input
            className="new-input"
            type="text"
            name="name"
            value={profile.name}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div className="new-info">
          <label className="new-label">Email:</label>
          <input
            className="new-input"
            type="email"
            name="email"
            value={profile.email}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div className="new-info">
          <label className="new-label">Contact:</label>
          <input
            className="new-input"
            type="tel"
            name="contact"
            value={profile.contact}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div className="new-info">
          <label className="new-label">Profile Picture:</label>
          <input
            className="new-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={!isEditing}
          />
          {profile.profilePicture && (
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="profile-image"
            />
          )}
        </div>

        <div className="new-info">
          <label className="new-label">Portfolio Value:</label>
          <input
            className="new-input"
            type="number"
            name="portfolioValue"
            value={profile.portfolioValue}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div className="new-info">
          <label className="new-label">Investment Goal:</label>
          <textarea
            className="new-textarea"
            name="investmentGoal"
            value={profile.investmentGoal}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div className="new-info">
          <label className="new-label">Risk Tolerance:</label>
          <select
            className="new-input"
            name="riskTolerance"
            value={profile.riskTolerance}
            disabled={!isEditing}
            onChange={handleChange}
          >
            <option value="">Select Risk Tolerance</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="new-info">
          <label className="new-label">Preferred Investment Type:</label>
          <input
            className="new-input"
            type="text"
            name="preferredInvestmentType"
            value={profile.preferredInvestmentType}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div className="new-info">
          <label className="new-label">Annual Income:</label>
          <input
            className="new-input"
            type="number"
            name="annualIncome"
            value={profile.annualIncome}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div className="new-info">
          <label className="new-label">Financial Advisor:</label>
          <input
            className="new-input"
            type="text"
            name="financialAdvisor"
            value={profile.financialAdvisor}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div className="new-info">
          <label className="new-label">Tax Bracket:</label>
          <input
            className="new-input"
            type="text"
            name="taxBracket"
            value={profile.taxBracket}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        <button className="new-button" onClick={handleSave}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default ProfileInformation;
