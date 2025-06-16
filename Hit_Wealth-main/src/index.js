import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import About from './components/About/About';
import Learning from './components/Learning/Learning';
import Stocks from './components/Stocks/Stocks';
import Stocknews from './components/Stocknews/NewsComponent';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import MutualFunds from './components/Mutualfunds/Mutualfunds';
import Livetrading from './components/Livetrading.jsx';
import Profile from './components/Profile/Profile';
import Payment from './components/Payment/Payment';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path = "/homepage" element = {<App />}></Route>
      <Route path = "/login" element = {<Login />}></Route>
      <Route path = "/profile" element = {<Profile />}></Route>
      <Route path = "/about" element = {<About/>}></Route>
      <Route path = "/Learning" element = {<Learning/>}></Route>
      <Route path="/stocks" element={<Stocks/>} />
      <Route path="/stocknews" element={<Stocknews/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/mutualfunds" element={<MutualFunds/>} />
      <Route path="/livetrading" element={<Livetrading/>} />
      <Route path="/payment" element={<Payment/>} />
    </Routes>
  </BrowserRouter>
);

