import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import DonationMain from "./components/Donationmain.jsx";
import JoinDonation from "./components/JoinDonation.jsx";
import Minimain from "./components/Minimain.jsx";
import Explore from "./components/Explore.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Header stays here, always visible */}
      <Routes>
        {/* Render components based on the current route */}
        <Route
          path="/"
          element={
            <>
              <Minimain />
              <DonationMain />
              <JoinDonation />
            </>
          }
        />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
