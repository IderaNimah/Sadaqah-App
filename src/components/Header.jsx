import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // State to track if mobile nav is open
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle function for mobile nav
  const toggleNav = () => {
    console.log("Logo clicked, toggling nav"); // Debug log
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header">
      <div className="headeer">
        <div className="logo-nav">
          {/* Make logo clickable for mobile with a larger click area */}
          <div 
            className="logo" 
            onClick={toggleNav} 
            style={{ cursor: 'pointer' }}
          >
            <h1>Sadaqah</h1>
          </div>
          
          {/* Desktop navigation */}
          <nav className="desktop-nav">
            <ul> 
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/explore" className="nav-link">Explore</Link>
              </li>
              <li>
                <Link to="/addcard" className="nav-link">Add Card</Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile navigation with more visible state display */}
          {isNavOpen && (
            <nav className="mobile-nav">
              <ul>
                <li>
                  <Link to="/" className="nav-link" onClick={toggleNav}>Home</Link>
                </li>
                <li>
                  <Link to="/explore" className="nav-link" onClick={toggleNav}>Explore</Link>
                </li>
                <li>
                  <Link to="/addcard" className="nav-link" onClick={toggleNav}>Add Card</Link>
                </li>
                <li>
                  <Link to="/profile" className="nav-link" onClick={toggleNav}>Profile</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
        
        <div className="notif">
          <div className="notiff">
            <input type="text" placeholder="Search" />
            <button className="search-button">
              <img src="./assets/search-normal.png" alt="search icon" className="searchicon" />
            </button> 
          </div>

          <div className="profile-header">
            <img src="./assets/notification.png" alt="notification" />
            <img src="./assets/Profileheader.png" alt="profileheader" />
            <Link to="/profile" className="profile-nav-link">ijtas_muiz</Link>
          </div>
        </div>
      </div>
      
      {/* Debug element to check if state is changing */}
      {/* <div style={{display: 'none'}}>Nav open: {isNavOpen.toString()}</div> */}
    </div>
  );
}

export default Header;