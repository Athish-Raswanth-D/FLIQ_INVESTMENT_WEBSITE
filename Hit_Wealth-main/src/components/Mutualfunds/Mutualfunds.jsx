import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mutualfunds.css';

const MutualFunds = () => {
  const navigate = useNavigate();
  const [selectedFund, setSelectedFund] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [duration, setDuration] = useState('1');

  const mutualFunds = [
    { 
      name: 'Axis Bluechip Fund', 
      type: 'Equity - Large Cap', 
      returns: '12.5%', 
      details: 'This fund focuses on large-cap stocks with stable returns.' 
    },
    { 
      name: 'SBI Small Cap Fund', 
      type: 'Equity - Small Cap', 
      returns: '18.3%', 
      details: 'Invests in small-cap companies with high growth potential.' 
    },
    { 
      name: 'HDFC Balanced Advantage Fund', 
      type: 'Hybrid', 
      returns: '10.2%', 
      details: 'Hybrid fund with a mix of equity and debt investments.' 
    },
    { 
      name: 'ICICI Prudential Liquid Fund', 
      type: 'Debt', 
      returns: '6.5%', 
      details: 'Short-term debt fund suitable for low-risk investors.' 
    },
    { 
      name: 'Nippon India Tax Saver Fund', 
      type: 'ELSS', 
      returns: '14.7%', 
      details: 'ELSS fund providing tax-saving benefits under Section 80C.' 
    },
    { 
      name: 'Kotak Flexicap Fund', 
      type: 'Equity - Flexicap', 
      returns: '11.8%', 
      details: 'Flexicap fund investing across large, mid, and small-cap stocks.' 
    },
    { 
      name: 'DSP Midcap Fund', 
      type: 'Equity - Mid Cap', 
      returns: '16.5%', 
      details: 'Focuses on mid-cap companies with high growth potential.' 
    },
    { 
      name: 'Aditya Birla Sun Life Corporate Bond Fund', 
      type: 'Debt', 
      returns: '7.3%', 
      details: 'Invests in high-rated corporate bonds for stable returns.' 
    },
    { 
      name: 'Mirae Asset Emerging Bluechip Fund', 
      type: 'Equity - Large & Mid Cap', 
      returns: '15.2%', 
      details: 'Focuses on emerging large and mid-cap companies.' 
    },
    { 
      name: 'L&T Tax Advantage Fund', 
      type: 'ELSS', 
      returns: '13.4%', 
      details: 'Tax-saving fund with a focus on long-term equity growth.' 
    },
    { 
      name: 'Franklin India Liquid Fund', 
      type: 'Debt', 
      returns: '6.2%', 
      details: 'Short-term fund for parking surplus cash.' 
    },
    { 
      name: 'ICICI Prudential Balanced Advantage Fund', 
      type: 'Hybrid', 
      returns: '10.9%', 
      details: 'Dynamically allocates between equity and debt instruments.' 
    },
    { 
      name: 'SBI Equity Hybrid Fund', 
      type: 'Hybrid', 
      returns: '11.3%', 
      details: 'Balanced fund investing in equity and debt for moderate risk.' 
    },
    { 
      name: 'Axis Midcap Fund', 
      type: 'Equity - Mid Cap', 
      returns: '15.0%', 
      details: 'Focuses on mid-cap companies with long-term growth potential.' 
    },
    { 
      name: 'UTI Nifty Index Fund', 
      type: 'Index', 
      returns: '10.4%', 
      details: 'Tracks the Nifty 50 index for passive investment.' 
    },
    { 
      name: 'HDFC Small Cap Fund', 
      type: 'Equity - Small Cap', 
      returns: '18.7%', 
      details: 'Focuses on high-growth small-cap stocks.' 
    },
    { 
      name: 'Tata Digital India Fund', 
      type: 'Sectoral - Technology', 
      returns: '22.4%', 
      details: 'Invests in technology and IT companies for sector-specific growth.' 
    },
    { 
      name: 'Edelweiss Greater China Equity Offshore Fund', 
      type: 'International Equity', 
      returns: '9.8%', 
      details: 'Invests in equities of Chinese and related markets.' 
    },
    { 
      name: 'ICICI Prudential Value Discovery Fund', 
      type: 'Equity - Value', 
      returns: '12.0%', 
      details: 'Focuses on undervalued stocks with long-term potential.' 
    },
    { 
      name: 'IDFC Government Securities Fund', 
      type: 'Debt - Gilt', 
      returns: '7.0%', 
      details: 'Invests in government securities for low-risk fixed returns.' 
    },
    { 
      name: 'Motilal Oswal Nasdaq 100 ETF', 
      type: 'International Equity', 
      returns: '16.9%', 
      details: 'Tracks the Nasdaq 100 index for US equity exposure.' 
    },
    { 
      name: 'Canara Robeco Bluechip Equity Fund', 
      type: 'Equity - Large Cap', 
      returns: '13.1%', 
      details: 'Invests in top large-cap companies for consistent returns.' 
    },
    { 
      name: 'Sundaram Rural and Consumption Fund', 
      type: 'Equity - Thematic', 
      returns: '14.3%', 
      details: 'Thematic fund focused on rural development and consumption sectors.' 
    },
    { 
      name: 'Quantum Long Term Equity Value Fund', 
      type: 'Equity - Value', 
      returns: '11.2%', 
      details: 'Focuses on value stocks with a long-term investment horizon.' 
    },
    { 
      name: 'Reliance Gold Savings Fund', 
      type: 'Commodities - Gold', 
      returns: '8.5%', 
      details: 'Invests in gold ETFs for commodity exposure.' 
    },
    { 
      name: 'Nippon India Pharma Fund', 
      type: 'Sectoral - Healthcare', 
      returns: '16.8%', 
      details: 'Sector-focused fund investing in pharmaceutical and healthcare companies.' 
    },
    { 
      name: 'ICICI Prudential Banking and Financial Services Fund', 
      type: 'Sectoral - BFSI', 
      returns: '15.5%', 
      details: 'Invests in banking and financial services companies.' 
    },
    { 
      name: 'Franklin India Feeder - US Opportunities Fund', 
      type: 'International Equity', 
      returns: '14.6%', 
      details: 'Invests in US-based companies with growth potential.' 
    },
    { 
      name: 'HDFC Index Fund - Sensex Plan', 
      type: 'Index', 
      returns: '10.3%', 
      details: 'Tracks the BSE Sensex index for passive equity returns.' 
    },
    { 
      name: 'Mirae Asset Tax Saver Fund', 
      type: 'ELSS', 
      returns: '15.0%', 
      details: 'Tax-saving fund with high growth potential in equities.' 
    },
    { 
      name: 'Tata Ethical Fund', 
      type: 'Equity - Shariah', 
      returns: '12.4%', 
      details: 'Invests in Shariah-compliant companies for ethical investment.' 
    },
    { 
      name: 'DSP Healthcare Fund', 
      type: 'Sectoral - Healthcare', 
      returns: '17.5%', 
      details: 'Focuses on healthcare and pharmaceutical companies.' 
    },
    { 
      name: 'L&T Infrastructure Fund', 
      type: 'Thematic - Infrastructure', 
      returns: '13.2%', 
      details: 'Thematic fund investing in infrastructure companies.' 
    },
    { 
      name: 'IDBI Gold ETF', 
      type: 'Commodities - Gold', 
      returns: '8.7%', 
      details: 'Invests in gold ETFs for stable commodity returns.' 
    },
    { 
      name: 'HDFC Top 100 Fund', 
      type: 'Equity - Large Cap', 
      returns: '11.6%', 
      details: 'Focuses on the top 100 companies in the Indian market.' 
    },
    { 
      name: 'UTI Healthcare Fund', 
      type: 'Sectoral - Healthcare', 
      returns: '16.2%', 
      details: 'Invests in healthcare and pharmaceutical companies for growth.' 
    },
    { 
      name: 'SBI Magnum Global Fund', 
      type: 'Equity - Thematic', 
      returns: '14.8%', 
      details: 'Invests in global companies for diversified equity exposure.' 
    },
    { 
      name: 'Axis ESG Equity Fund', 
      type: 'Equity - ESG', 
      returns: '12.3%', 
      details: 'Focuses on Environmental, Social, and Governance (ESG)-compliant companies.' 
    },
    { 
      name: 'Motilal Oswal Large and Midcap Fund', 
      type: 'Equity - Large & Mid Cap', 
      returns: '14.0%', 
      details: 'Invests in a mix of large and mid-cap companies.' 
    },
    { 
      name: 'Sundaram Global Brand Fund', 
      type: 'International Equity', 
      returns: '13.7%', 
      details: 'Focuses on globally recognized brands for international exposure.' 
    }
  ];
  

  const handleSelectFund = (fund) => {
    setSelectedFund(fund);
    setInvestmentAmount('');
    setDuration('1');
  };

  const calculateReturns = () => {
    if (investmentAmount && duration) {
      const annualReturnRate = parseFloat(selectedFund.returns.replace('%', '')) / 100;
      const expectedReturns = investmentAmount * Math.pow(1 + annualReturnRate, duration);
      return expectedReturns.toFixed(2);
    }
    return 0;
  };

  const confirmInvestment = () => {
    if (!selectedFund) {
      alert('Please select a mutual fund first');
      return;
    }
  
    if (!investmentAmount || parseFloat(investmentAmount) <= 0) {
      alert('Please enter a valid investment amount');
      return;
    }
  
    if (window.confirm(`Are you sure you want to invest ₹${investmentAmount} in ${selectedFund.name} for ${duration} year(s)?`)) {
      // Create symbol from fund name
      const symbol = selectedFund.name.replace(/\s+/g, '_').toUpperCase();
      
      // Navigate to payment page with investment details as URL parameters
      navigate(`/payment?type=mutualfund&name=${encodeURIComponent(selectedFund.name)}&symbol=${encodeURIComponent(symbol)}&quantity=1&price=${investmentAmount}`);
    }
  };

  const handleInvest = () => {
      if (!selectedFund) {
        alert('Please select a mutual fund first');
        return;
      }
    
      if (!investmentAmount || parseFloat(investmentAmount) <= 0) {
        alert('Please enter a valid investment amount');
        return;
      }
    
      if (window.confirm(`Are you sure you want to invest ₹${investmentAmount} in ${selectedFund.name} for ${duration} year(s)?`)) {
        // Create symbol from fund name
        const symbol = selectedFund.name.replace(/\s+/g, '_').toUpperCase();
        
        // Navigate to payment page with investment details as URL parameters
        navigate(`/payment?type=mutualfund&name=${encodeURIComponent(selectedFund.name)}&symbol=${encodeURIComponent(symbol)}&quantity=1&price=${investmentAmount}`);
      }
    };

  const confirmRedemption = () => {
    if (window.confirm(`Are you sure you want to redeem your investment in ${selectedFund.name}?`)) {
      alert(`You have successfully redeemed your investment in ${selectedFund.name}.`);
    }
  };

  return (
    <div className="mutual-funds-wrapper">
      {/* Mutual Fund List */}
      <div className="funds-list">
        <h3>Mutual Funds</h3>
        {mutualFunds.map((fund, index) => (
          <div
            key={index}
            onClick={() => handleSelectFund(fund)}
            className={`fund-item ${selectedFund?.name === fund.name ? 'selected' : ''}`}
          >
            <strong>{fund.name}</strong>
            <p>{fund.type}</p>
            <p>Annual Returns: {fund.returns}</p>
          </div>
        ))}
      </div>

      {/* Mutual Fund Details */}
      <div className="fund-details">
        <h1>Mutual Fund Investments</h1>
        {selectedFund ? (
          <>
            <h2>{selectedFund.name}</h2>
            <p>Type: {selectedFund.type}</p>
            <p>Annual Returns: {selectedFund.returns}</p>
            <p>{selectedFund.details}</p>

            {/* Investment Inputs */}
            <div className="investment-inputs">
              <h4>Investment Details</h4>
              <label>
                Investment Amount (₹): 
                <input 
                  type="number" 
                  value={investmentAmount} 
                  onChange={(e) => setInvestmentAmount(parseFloat(e.target.value) || '')} 
                  placeholder="Enter amount"
                />
              </label>
              <label>
                Duration (Years): 
                <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                  <option value="1">1</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </label>
            </div>

            {/* Expected Returns */}
            <div className="returns">
              <h4>Expected Returns:</h4>
              <p>₹{calculateReturns()}</p>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button onClick={confirmInvestment} className="invest-button">Invest</button>
              <button onClick={confirmRedemption} className="redeem-button">Redeem</button>
            </div>
          </>
        ) : (
          <p>Please select a mutual fund to view details and invest.</p>
        )}
      </div>
    </div>
  );
};

export default MutualFunds;
