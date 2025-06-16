import React, { useEffect, useRef } from 'react';

function TradingViewWidget() {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }
    `;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        backgroundColor: 'black',
      }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ width: '100%', height: '100%' }}
      ></div>
      <div
        className="tradingview-widget-copyright"
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          fontSize: '12px',
          color: '#999',
        }}
      >
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
          style={{ textDecoration: 'none', color: '#1E90FF' }}
        >
        </a>
      </div>
    </div>
  );
}

export default TradingViewWidget;
