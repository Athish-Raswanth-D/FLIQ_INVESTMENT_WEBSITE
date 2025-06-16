import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "./Navbar.css";
// Dashboard is linked to via React Router, no need to import the component here
import {IoMdRocket} from "react-icons/io";
const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
React.useEffect(() => {
  const handleLoginChange = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(isLoggedIn);
  };
  window.addEventListener('loginChange', handleLoginChange);
  return () => window.removeEventListener('loginChange', handleLoginChange);
}, []);
    const navigate=useNavigate();
    const navHandler = () => {
        setNavToggle(prevData => !prevData);
    }
    const handleGetstarted = () => {
        navigate("/login");
    };
    const handleMutualFunds = () => {
        navigate("/mutualfunds");
    };
  return (
    <nav className='navbar w-100 flex'>
        <div className='container w-100'>
            <div className='navbar-content flex fw-7'>
                <div className='brand-and-toggler flex flex-between w-100'>
                    <Link to = "/" className='navbar-brand fs-26'>FLIQ</Link>
                    <div type = "button" className={`hamburger-menu ${navToggle ? 'hamburger-menu-change' : ""}`} onClick={navHandler}>
                        <div className='bar-top'></div>
                        <div className='bar-middle'></div>
                        <div className='bar-bottom'></div>
                    </div>
                </div>

                <div className={`navbar-collapse ${navToggle ? 'show-navbar-collapse' : ""}`}>
                    <div className='navbar-collapse-content'>
                        <ul className='navbar-nav'>
                            <li className='text-white'>
                                <Link to = "/About">About</Link>
                            </li>
                            <li className='text-white'>
                                <Link to = "/Stocks">Stocks</Link>
                            </li>
                            <li className='text-white'>
                                <Link to = "/Dashboard">Dashboard</Link>
                            </li>
                            <li className='text-white'>
                                <Link to = "/MutualFunds" onClick={handleMutualFunds}>MFI</Link>
                            </li>
                        </ul>
                        <div className='navbar-btns'>
                            {isLoggedIn ? (
<img src="/profile-icon.png" alt="Profile" className="profile-icon" onClick={() => navigate('/Dashboard')} />
) : (
<button type = "button" className='btn' onClick={handleGetstarted}><IoMdRocket /><span>get started</span></button>
)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar