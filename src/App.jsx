import './App.css'

function App() {
  
  return (
    <>
      <Header/>
    </>
  )
}

function Header(){
  return (
     <div className="header">
     <div className="logo-nav">
      <div className='logo'>
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
      <input type="text" placeholder='Search' />
      <img src="./assets/notification.png" alt="notification" />
     </div>

     <div className="profile-header">
      <img src="./assets/Profileheader.png" alt="profileheader" />
      <p>ijtas_muiz</p>
     </div>
     </div>

  )
}

export default App
