import React from 'react';
import './Learning.css';

const InvestmentLearning = () => {
  return (
    <div className="learning-container">
      <div className="sidebar">
        <h2>Investment Topics</h2>
        <ul>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="#techniques">Techniques</a></li>
          <li><a href="#types">Types of Investments</a></li>
          <li><a href="#risks">Understanding Risks</a></li>
          <li><a href="#tips">Tips for Beginners</a></li>
        </ul>
      </div>
      <div className="content">
        <section id="intro">
          <h1>Introduction</h1>
          <p>Investing is the process of putting your money to work to earn a profit. Learn the basics to get started.</p>
        </section>
        <section id="techniques">
          <h1>Investment Techniques</h1>
          <p>Explore methods like dollar-cost averaging, value investing, and growth investing to maximize returns.</p>
        </section>
        <section id="types">
          <h1>Types of Investments</h1>
          <p>Common types include stocks, bonds, mutual funds, real estate, and ETFs.</p>
        </section>
        <section id="risks">
          <h1>Understanding Risks</h1>
          <p>Each investment comes with risks. Learn how to manage and mitigate them effectively.</p>
        </section>
        <section id="tips">
          <h1>Tips for Beginners</h1>
          <p>Start early, diversify, and invest regularly to build a solid portfolio over time.</p>
        </section>
      </div>
    </div>
  );
};

const Learning = () => {
  const learningData = [
    {
      type: 'book',
      title: 'A Beginner Guide to the Stock Market: Everything You Need to Start Making Money Today ',
      thumbnail: 'https://m.media-amazon.com/images/I/51+4sWWykDL._SL500_.jpg',
      link: 'https://www.amazon.in/Beginners-Guide-Stock-Market-Everything/dp/1099617200',
    },
    {
      type: 'book',
      title: 'The Intelligent Investor',
      thumbnail: 'https://m.media-amazon.com/images/I/91L0La1pwDL._AC_UF1000,1000_QL80_.jpg',
      link: 'https://www.amazon.in/INTELLIGENT-INVESTOR-REV-ED-PB/dp/0060555661',
    },
    {
      type: 'book',
      title: 'Rich Dad Poor Dad',
      thumbnail: 'https://m.media-amazon.com/images/I/81BE7eeKzAL.jpg',
      link: 'https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131',
    },
    {
      type: 'book',
      title: 'Trading Strategies Crash Course 4 books in 1: Technical Analysis for Beginners + Crypto Trading+Day Trading Strategies+Day Trading Options',
      thumbnail: 'https://m.media-amazon.com/images/I/81l29U3MAqL._SY425_.jpg',
      link: 'https://www.amazon.co.uk/Trading-Strategies-Crash-Course-books-ebook/dp/B09NLGXPFN',
    },
    {
      type: 'videos',
      title: 'Mark tilbury',
      thumbnail: 'https://yt3.googleusercontent.com/_fojvheMDTi4nrbfVv8LqWBkr41GS9wcezdc8B2ZSO9Xofuy5K0bx7CAWuhHUA8o1YFJIF4Z=s160-c-k-c0x00ffffff-no-rj',
      link: 'http://www.youtube.com/@marktilbury',
    },
    {
      type: 'Videos',
      title: 'Money pechu in tamil by anand srivasan',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2I3AdEPj0kFmHCHYwIMPk4XcSHQjfWk-0-g&s',
      link: 'http://www.youtube.com/@MoneyPechu',
    },
    {
      type: 'videos',
      title: 'clear value tax',
      thumbnail: 'https://yt3.googleusercontent.com/OKQ_WX2rmHpCHHKYt0OaeoDwbtZjBrObaQr9BA-I1yKi0AHly5s1ieDdQHZ0-g9xyj0aHDBMJA=s900-c-k-c0x00ffffff-no-rj',
      link: 'http://www.youtube.com/@clearvaluetax9382',
    },
    {
      type: 'Videos',
      title: 'Warikoo',
      thumbnail: 'https://yt3.googleusercontent.com/f1fwkaQTc8pFCbxjWjPVG7bzolx8_JhtgvMdDRz8F_OUeA-3SJxfJKWmVBzik4KuPOSb2wMC=s160-c-k-c0x00ffffff-no-rj',
      link: 'http://www.youtube.com/@warikoo',
    },
  ];

  return (
    <div className="container">
      <h2 className="section-h text-robin-blue text-center">Learn Stocks and Investments</h2>
      <div className="grid">
        {learningData.map((item, index) => (
          <div key={index} className="card translate-effect">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.thumbnail} alt={item.title} className="img-cover" />
              <div className="card-content">
                <h3 className="text text-black">{item.title}</h3>
                <p className="text-grey">{item.type === 'video' ? 'Video' : 'Book'}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const InvestmentAndLearning = () => {
  return (
    <div>
      <InvestmentLearning />
      <Learning />
    </div>
  );
};

export default InvestmentAndLearning;
