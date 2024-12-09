import { useState } from "react";

function Explore() {
    
      const [searchTerm, setSearchTerm] = useState("");
    
      const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      return (
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button className="search-button">
            <img src="./assets/search-normal.png" alt="search icon" className="search-icon" />
          </button>
        </div>
      );
    }
    
    export default Explore;
    