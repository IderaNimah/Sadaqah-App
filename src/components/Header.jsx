import {Link} from "react-router-dom";

function Header() {
    return (
      <div className="header">
        <div className="headeer">
          <div className="logo-nav">
            <div className="logo">
              <h1>Sadaqah</h1>
            </div>
            <nav>
              <ul> 
                <li>
                <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                <Link to="/explore" className="nav-link">Explore</Link>
                </li>
                <li>
                <Link to="/" className="nav-link">Add Card</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="notif">
            <div className="notiff">
              <input type="text" placeholder="Search" />
              <img src="./assets/notification.png" alt="notification" />
            </div>
  
            <div className="profile-header">
              <img src="./assets/Profileheader.png" alt="profileheader" />
              <p>ijtas_muiz</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;