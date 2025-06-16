import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Stocks.css';

const StockTradingApp = () => {
  const navigate = useNavigate();
  const [selectedStock, setSelectedStock] = useState(null);
  const [quantities, setQuantities] = useState({});
  const stocks = [
    { name: 'Google', details: 'Alphabet Inc. - NASDAQ: GOOGL', price: '2850.50', change: '1.8' },
    { name: 'Amazon', details: 'Amazon.com Inc. - NASDAQ: AMZN', price: '3512.75', change: '-0.5' },
    { name: 'Apple', details: 'Apple Inc. - NASDAQ: AAPL', price: '172.90', change: '2.3' },
    { name: 'Microsoft', details: 'Microsoft Corporation - NASDAQ: MSFT', price: '329.45', change: '1.2' },
    { name: 'Tesla', details: 'Tesla Inc. - NASDAQ: TSLA', price: '1125.30', change: '-3.4' },
    { name: 'Meta', details: 'Meta Platforms Inc. - NASDAQ: META', price: '340.20', change: '0.7' },
    { name: 'Netflix', details: 'Netflix Inc. - NASDAQ: NFLX', price: '690.10', change: '2.1' },
    { name: 'NVIDIA', details: 'NVIDIA Corporation - NASDAQ: NVDA', price: '305.80', change: '-1.0' },
    { name: 'Adobe', details: 'Adobe Inc. - NASDAQ: ADBE', price: '567.90', change: '1.5' },
    { name: 'PayPal', details: 'PayPal Holdings Inc. - NASDAQ: PYPL', price: '195.30', change: '-0.6' },
    { name: 'Intel', details: 'Intel Corporation - NASDAQ: INTC', price: '54.45', change: '1.9' },
    { name: 'AMD', details: 'Advanced Micro Devices Inc. - NASDAQ: AMD', price: '104.50', change: '-1.4' },
    { name: 'Cisco', details: 'Cisco Systems Inc. - NASDAQ: CSCO', price: '58.20', change: '0.3' },
    { name: 'Oracle', details: 'Oracle Corporation - NYSE: ORCL', price: '86.75', change: '1.0' },
    { name: 'Salesforce', details: 'Salesforce Inc. - NYSE: CRM', price: '295.40', change: '2.2' },
    { name: 'IBM', details: 'International Business Machines - NYSE: IBM', price: '141.30', change: '-0.8' },
    { name: 'Visa', details: 'Visa Inc. - NYSE: V', price: '234.20', change: '0.5' },
    { name: 'Mastercard', details: 'Mastercard Inc. - NYSE: MA', price: '391.60', change: '1.3' },
    { name: 'Boeing', details: 'The Boeing Company - NYSE: BA', price: '220.15', change: '-1.7' },
    { name: 'Coca-Cola', details: 'The Coca-Cola Company - NYSE: KO', price: '62.40', change: '0.2' },
    { name: 'PepsiCo', details: 'PepsiCo Inc. - NASDAQ: PEP', price: '178.60', change: '-0.3' },
    { name: 'Walmart', details: 'Walmart Inc. - NYSE: WMT', price: '152.30', change: '0.6' },
    { name: 'Home Depot', details: 'The Home Depot Inc. - NYSE: HD', price: '315.90', change: '-2.0' },
    { name: 'Costco', details: 'Costco Wholesale Corporation - NASDAQ: COST', price: '533.75', change: '1.7' },
    { name: 'Procter & Gamble', details: 'Procter & Gamble Co. - NYSE: PG', price: '153.60', change: '0.9' },
    { name: 'Johnson & Johnson', details: 'Johnson & Johnson - NYSE: JNJ', price: '165.20', change: '-0.4' },
    { name: 'Pfizer', details: 'Pfizer Inc. - NYSE: PFE', price: '52.40', change: '0.7' },
    { name: 'Merck', details: 'Merck & Co. Inc. - NYSE: MRK', price: '87.50', change: '1.1' },
    { name: 'Disney', details: 'The Walt Disney Company - NYSE: DIS', price: '147.80', change: '-0.6' },
    { name: 'AT&T', details: 'AT&T Inc. - NYSE: T', price: '20.50', change: '0.4' },
    { name: 'Verizon', details: 'Verizon Communications Inc. - NYSE: VZ', price: '36.90', change: '-1.2' },
    { name: 'Comcast', details: 'Comcast Corporation - NASDAQ: CMCSA', price: '46.20', change: '0.8' },
    { name: 'ExxonMobil', details: 'Exxon Mobil Corporation - NYSE: XOM', price: '113.40', change: '-0.5' },
    { name: 'Chevron', details: 'Chevron Corporation - NYSE: CVX', price: '158.60', change: '1.0' },
    { name: 'Shell', details: 'Shell plc - NYSE: SHEL', price: '61.40', change: '-0.7' },
    { name: 'BP', details: 'BP plc - NYSE: BP', price: '37.90', change: '0.6' },
    { name: 'Toyota', details: 'Toyota Motor Corporation - NYSE: TM', price: '181.50', change: '0.4' },
    { name: 'Ford', details: 'Ford Motor Company - NYSE: F', price: '14.20', change: '1.6' },
    { name: 'General Motors', details: 'General Motors Company - NYSE: GM', price: '39.50', change: '-0.9' },
    { name: 'Rivian', details: 'Rivian Automotive Inc. - NASDAQ: RIVN', price: '27.30', change: '2.3' },
    { name: 'Lucid', details: 'Lucid Group Inc. - NASDAQ: LCID', price: '11.40', change: '-2.2' },
    { name: 'Square', details: 'Block Inc. - NYSE: SQ', price: '67.50', change: '3.2' },
    { name: 'Shopify', details: 'Shopify Inc. - NYSE: SHOP', price: '136.80', change: '1.8' },
    { name: 'Zoom', details: 'Zoom Video Communications Inc. - NASDAQ: ZM', price: '75.90', change: '0.5' },
    { name: 'Twitter', details: 'Twitter Inc. - NYSE: TWTR', price: '54.50', change: '-0.3' },
    { name: 'Uber', details: 'Uber Technologies Inc. - NYSE: UBER', price: '40.70', change: '2.5' },
    { name: 'Lyft', details: 'Lyft Inc. - NASDAQ: LYFT', price: '13.20', change: '-1.4' },
    { name: 'eBay', details: 'eBay Inc. - NASDAQ: EBAY', price: '52.10', change: '1.1' },
  ];
  
  const handleSelectStock = (stock) => {
    setSelectedStock(stock);
    if (!quantities[stock.name]) {
      setQuantities((prev) => ({ ...prev, [stock.name]: 1 })); 
    }
  };

  const incrementQuantity = () => {
    if (selectedStock) {
      setQuantities((prev) => ({
        ...prev,
        [selectedStock.name]: prev[selectedStock.name] + 1,
      }));
    }
  };

  const decrementQuantity = () => {
    if (selectedStock && quantities[selectedStock.name] > 1) {
      setQuantities((prev) => ({
        ...prev,
        [selectedStock.name]: prev[selectedStock.name] - 1,
      }));
    }
  };

  const confirmBuy = () => {
    if (window.confirm('Are you sure you want to buy these stocks?')) {
      // Extract symbol from details (e.g., "NASDAQ: GOOGL" -> "GOOGL")
      const symbolMatch = selectedStock.details.match(/[A-Z]+:\s([A-Z]+)/);
      const symbol = symbolMatch ? symbolMatch[1] : selectedStock.name;
      
      // Navigate to payment page with investment details as URL parameters
      navigate(`/payment?type=stock&name=${encodeURIComponent(selectedStock.name)}&symbol=${encodeURIComponent(symbol)}&quantity=${quantities[selectedStock.name]}&price=${selectedStock.price}`);
    }
  };

  const confirmSell = () => {
    if (window.confirm('Are you sure you want to sell these stocks?')) {
      alert(`You have successfully sold ${quantities[selectedStock.name]} of ${selectedStock.name}`);
    }
  };

  return (
    <div className="wrapper">
      {/* Scrollable Stock List */}
      <div className="stock-list">
        <h3>Stocks</h3>
        {stocks.map((stock, index) => (
          <div
            key={index}
            onClick={() => handleSelectStock(stock)}
            className={`stock-item ${
              selectedStock?.name === stock.name ? 'selected' : ''
            }`}
          >
            <strong>{stock.name}</strong>
            <p>{stock.details}</p>
            <p>
              Price: ₹{stock.price} | Change: <span className={stock.change >= 0 ? 'positive' : 'negative'}>{stock.change}%</span>
            </p>
          </div>
        ))}
      </div>

      {/* Stock Details and Actions */}
      <div className="stock-details">
        <h1>Stock Trading App</h1>
        {selectedStock ? (
          <>
            <h2>{selectedStock.name}</h2>
            <p>{selectedStock.details}</p>
            <p>
              Current Price: ₹{selectedStock.price} | Change:{' '}
              <span className={selectedStock.change >= 0 ? 'positive' : 'negative'}>{selectedStock.change}%</span>
            </p>

            <div className="quantity-container">
              <h4>Quantity</h4>
              <button onClick={decrementQuantity}>-</button>
              <input
                type="number"
                value={quantities[selectedStock.name] || 1}
                onChange={(e) => {
                  const newQuantity = Math.max(1, parseInt(e.target.value));
                  setQuantities((prev) => ({
                    ...prev,
                    [selectedStock.name]: newQuantity,
                  }));
                }}
                min="1"
              />
              <button onClick={incrementQuantity}>+</button>
            </div>

            <div className="action-buttons">
              <button onClick={confirmBuy} className="buy-button">Buy</button>
              <button onClick={confirmSell} className="sell-button">Sell</button>
            </div>
          </>
        ) : (
          <p>Please select a stock from the list to view details and trade.</p>
        )}
      </div>
    </div>
  );
};

export default StockTradingApp;
