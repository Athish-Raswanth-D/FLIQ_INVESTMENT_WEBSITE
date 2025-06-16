import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    saveCard: false
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [investment, setInvestment] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('Please login first!');
      navigate('/login');
      return;
    }

    // Get investment details from URL parameters
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const name = params.get('name');
    const symbol = params.get('symbol');
    const quantity = params.get('quantity');
    const price = params.get('price');
    
    if (type && name && symbol && quantity && price) {
      setInvestment({
        type,
        name,
        symbol,
        quantity: parseInt(quantity),
        price: parseFloat(price)
      });
    } else {
      alert('No investment details found!');
      navigate(-1); // Go back if no investment details
    }
  }, [navigate, location]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!paymentInfo.cardNumber || !paymentInfo.cardHolder || !paymentInfo.expiryDate || !paymentInfo.cvv) {
      alert('Please fill in all payment details');
      return;
    }

    setIsProcessing(true);

    try {
      const userId = localStorage.getItem('userId');
      
      if (!userId) {
        throw new Error('User ID not found. Please log in again.');
      }
      
      // Validate investment data before sending
      if (!investment.type || !investment.symbol || !investment.name || 
          !investment.quantity || !investment.price) {
        throw new Error('Investment details are incomplete.');
      }
      
      // Save investment to database
      const response = await axios.post('http://localhost:3000/api/investments', {
        userId,
        type: investment.type, // 'stock' or 'mutualfund'
        symbol: investment.symbol,
        name: investment.name, // Include the investment name
        quantity: investment.quantity,
        purchase_price: investment.price
      });

      setTimeout(() => {
        setIsProcessing(false);
        alert('Payment successful! Your investment has been added to your portfolio.');
        navigate('/dashboard'); // Redirect to dashboard after successful payment
      }, 2000); // Simulate payment processing delay
    } catch (error) {
      setIsProcessing(false);
      console.error('Payment error:', error);
      
      // Display more specific error messages
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const errorMessage = error.response.data.message || 'Server error occurred';
        alert(`Payment failed: ${errorMessage}`);
      } else if (error.request) {
        // The request was made but no response was received
        alert('Payment failed: No response from server. Please check your connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        alert(`Payment failed: ${error.message}`);
      }
    }
  };

  if (!investment) {
    return <div className="payment-loading">Loading payment details...</div>;
  }

  return (
    <div className="payment-wrapper">
      <div className="payment-container">
        <h2>Complete Your Payment</h2>
        
        <div className="investment-summary">
          <h3>Investment Summary</h3>
          <div className="summary-details">
            <p><strong>Type:</strong> {investment.type === 'stock' ? 'Stock' : 'Mutual Fund'}</p>
            <p><strong>Name:</strong> {investment.name}</p>
            <p><strong>Symbol:</strong> {investment.symbol}</p>
            <p><strong>Quantity:</strong> {investment.quantity}</p>
            <p><strong>Price per unit:</strong> ₹{investment.price}</p>
            <p className="total-amount"><strong>Total Amount:</strong> ₹{(investment.price * investment.quantity).toFixed(2)}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <h3>Payment Details</h3>
          
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={paymentInfo.cardNumber}
              onChange={handleChange}
              maxLength="19"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder Name</label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              placeholder="John Doe"
              value={paymentInfo.cardHolder}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={paymentInfo.expiryDate}
                onChange={handleChange}
                maxLength="5"
                required
              />
            </div>

            <div className="form-group half">
              <label htmlFor="cvv">CVV</label>
              <input
                type="password"
                id="cvv"
                name="cvv"
                placeholder="123"
                value={paymentInfo.cvv}
                onChange={handleChange}
                maxLength="3"
                required
              />
            </div>
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="saveCard"
              name="saveCard"
              checked={paymentInfo.saveCard}
              onChange={handleChange}
            />
            <label htmlFor="saveCard">Save card for future payments</label>
          </div>

          <div className="payment-actions">
            <button type="button" onClick={() => navigate(-1)} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="pay-btn" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : `Pay ₹${(investment.price * investment.quantity).toFixed(2)}`}
            </button>
          </div>
        </form>

        <div className="payment-security">
          <p>🔒 Your payment information is secure and encrypted</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;