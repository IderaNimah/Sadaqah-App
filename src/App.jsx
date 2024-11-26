import "./App.css";
import DonationMain from "./components/Donationmain.jsx";
import Minimain from "./components/Minimain.jsx";

function App() {
  return (
    <>
      <Header />
      <Minimain />
      <DonationMain/>
    </>
  );
}

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
              <li>Home</li>
              <li>Explore</li>
              <li>Add Card</li>
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

export default App;
