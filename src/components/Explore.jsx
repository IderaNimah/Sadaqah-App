import JoinDonation from "./JoinDonation"

function Explore() {
  return (
  <div className="explore">
    <div className="headexplore">
      <h2>Explore</h2>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">
          <img
            src="./assets/search-normal.png"
            alt="search icon"
            className="search-icon"
          />
        </button>
      </div>
      </div>
      <JoinDonation/>
  </div>
  );
}

export default Explore;
