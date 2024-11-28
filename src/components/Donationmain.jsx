import PropTypes from "prop-types";

const donationGroupOne = [
  {
    name: "Developers boys from GR",
    ongoing: "24 ongoing donations",
    number: "80",
    headerImg: "./assets/collationheader.png",
    footerImg: "./assets/collation.png",
  },
  {
    name: "Alabi, James and co",
    ongoing: "2 ongoing donations",
    number: "5",
    headerImg: "./assets/collabtwo.png",
    footerImg: "./assets/collationtwo.png",
  },
  {
    name: "Gather Together",
    ongoing: "4 ongoing donations",
    number: "12",
    headerImg: "./assets/collabthree.png",
    footerImg: "./assets/collationthree.png",
  },
  {
    name: "Donation Group for Mosq..",
    ongoing: "6 ongoing donations",
    number: "10",
    headerImg: "./assets/collabfour.png",
    footerImg: "./assets/collationfour.png",
  },
];

const donationGroupTwo = [
  {
    name: "Hospitals Donation",
    ongoing: "10 ongoing donations",
    number: "34",
    headerImg: "./assets/collabfive.png",
    footerImg: "./assets/collation.png",
  },
  {
    name: "Mosque IB Central",
    ongoing: "5 ongoing donations",
    number: "45",
    headerImg: "./assets/collabsix.png",
    footerImg: "./assets/collationtwo.png",
  },
  {
    name: "Alabi, James and co",
    ongoing: "2 ongoing donations",
    number: "5",
    headerImg: "./assets/collabtwo.png",
    footerImg: "./assets/collationthree.png",
  },
  {
    name: "Hospitals Donation",
    ongoing: "10 ongoing donations",
    number: "34",
    headerImg: "./assets/collabfive.png",
    footerImg: "./assets/collation.png",
  },
];

function DonationMain() {
  return (
    <>
      <Entre/>
      <div className="donation-container">
        {donationGroupOne.map((donor, index) => (
          <Donationgroup key={index} donor={donor} />
        ))}
      </div>
      <div className="donation-container-two">
        {donationGroupTwo.map((donor, index) => (
          <Donationgroup key={index} donor={donor} />
        ))}
      </div>
    </>
  );
}

function Entre(){
  return(
    <div className="enter">
      <h2>Donation Groups</h2>
      <p> View All</p>
    </div>
  )
}

function Donationgroup({ donor }) {
  return (
    <section className="profile">
      <div className="coll-one">
        <img src={donor.headerImg} alt={`${donor.name} header`} />
        <h3>{donor.name}</h3>
      </div>
      <p>{donor.ongoing}</p>
      <div className="profilefooter">
        <p>People joined: <span className="numco">{donor.number}</span></p>
        <img src={donor.footerImg} alt={`${donor.name} footer`} />
      </div>
    </section>
  
  );
}



// PropTypes validation
Donationgroup.propTypes = {
  donor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ongoing: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    headerImg: PropTypes.string.isRequired,
    footerImg: PropTypes.string.isRequired,
  }).isRequired,
};

export default DonationMain;
