import JoinDonation from "./JoinDonation.jsx";
import Minimain from "./Minimain.jsx";
import DonationMain from "./Donationmain.jsx";

function Home() {
  return (
    <div className="home">
        <Minimain/>
        <DonationMain/>
        <JoinDonation/>
    </div>
  )
}

export default Home;