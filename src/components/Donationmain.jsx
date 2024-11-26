function DonationMain() {
  return (
    <>
      <div className="donation-container">
        <Donationgroup
          donor={{
            name: "Developers boys from GR",
            ongoing: "24 ongoing donations",
            number: "80",
            headerImg: "./assets/collationheader.png",
            footerImg: "./assets/collation.png",
          }}
        />

        <Donationgroup
          donor={{
            name: "Alabi, James and co",
            ongoing: "2 ongoing donations",
            number: "5",
            headerImg: "./assets/collabtwo.png",
            footerImg: "./assets/collationtwo.png",
          }}
        />

        <Donationgroup
          donor={{
            name: "Gather Together",
            ongoing: "4 ongoing donations",
            number: "12",
            headerImg: "./assets/collabthree.png",
            footerImg: "./assets/collationthree.png",
          }}
        />

        <Donationgroup
          donor={{
            name: "Donation Group for Mosq..",
            ongoing: "6 ongoing donations",
            number: "10",
            headerImg: "./assets/collabfour.png",
            footerImg: "./assets/collationfour.png",
          }}
        />
      </div>

      <div className="donation-container-two">
        <Donationgroup
          donor={{
            name: "Hospitals Donation",
            ongoing: "10 ongoing donations",
            number: "34",
            headerImg: "./assets/collabfive.png",
            footerImg: "./assets/collation.png",
          }}
        />

        <Donationgroup
          donor={{
            name: "Mosque IB Central",
            ongoing: "5 ongoing donations",
            number: "45",
            headerImg: "./assets/collabsix.png",
            footerImg: "./assets/collationtwo.png",
          }}
        />

        <Donationgroup
          donor={{
            name: "Alabi, James and co",
            ongoing: "2 ongoing donations",
            number: "5",
            headerImg: "./assets/collabtwo.png",
            footerImg: "./assets/collationthree.png",
          }}
        />

        <Donationgroup
          donor={{
            name: "Hospitals Donation",
            ongoing: "10 ongoing donations",
            number: "34",
            headerImg: "./assets/collabfive.png",
            footerImg: "./assets/collation.png",
          }}
        />
      </div>
    </>
  );
}

function Donationgroup({ donor }) {
  return (
    <section className="profile">
      <div className="coll-one">
        <img src={donor.headerImg} alt="" />
        <h3>{donor.name}</h3>
      </div>
      <p>{donor.ongoing}</p>
      <div>
        <p>People joined:{donor.number}</p>
        <img src={donor.footerImg} alt="" />
      </div>
    </section>
  );
}

export default DonationMain;
