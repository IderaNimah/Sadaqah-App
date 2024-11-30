import PropTypes from "prop-types";

const JoinGroup = [
  {
    name: "images",
    joinheaderimg: "./assets/joinone.png",
    joinsubimg: "./assets/profileuser.png",
    subtext: "Personal",
    subheader: "Biweekly Podcast Contribution",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam eu molestie, dictum est...",
    number: "N15000 of N20000 goal",
    subfootertext: "Group Developer Boys from GR",
    footertext: "Created by",
    footertextimg: "./assets/hifoot.png",
  },

  {
    name: "images",
    joinheaderimg: "./assets/jointwo.png",
    joinsubimg: "./assets/Vector.png",
    subtext: "Charity",
    subheader: "Funding for Mosque’s New Boreh...",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam eu molestie, dictum est...",
    number: "N15000 of N20000 goal",
    subfootertext: "Group Developer Boys from GR",
    footertext: "Created by",
    footertextimg: "./assets/hifoot.png",
  },

  {
    name: "images",
    joinheaderimg: "./assets/jointhree.png",
    joinsubimg: "./assets/Vector.png",
    subtext: "Charity",
    subheader: "Care Health Package",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam eu molestie, dictum est...",
    number: "N15000 of N20000 goal",
    subfootertext: "Group Developer Boys from GR",
    footertext: "Created by",
    footertextimg: "./assets/hifoot.png",
  },

  {
    name: "images",
    joinheaderimg: "./assets/joinfour.png",
    joinsubimg: "./assets/Vector.png",
    subtext: "Charity",
    subheader: "Children Welfare for Ward 5",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam eu molestie, dictum est...",
    number: "N15000 of N20000 goal",
    subfootertext: "Group Developer Boys from GR",
    footertext: "Created by",
    footertextimg: "./assets/hifoot.png",
  },
];

function JoinDonation() {
  return (
    <>
    <JoinEntre/>
    <div className="let">
      {JoinGroup.map((joindonor, index) => (
        <Subdonation key={index} joindonor={joindonor} />
      ))}
    </div>
    </>
  );
}

function JoinEntre(){
    return(
      <div className="enterjoin">
        <h2>Joined Donations</h2>
        <p> See More</p>
      </div>
    )
  }

function Subdonation({ joindonor }) {
  return (
    <section className="mainjoin">
      <div className="joinh">
        <img src={joindonor.joinheaderimg} alt="Join group header" />
      </div>

      <div className="joins">
        <img src={joindonor.joinsubimg} alt="Join sub image" />
        <p>{joindonor.subtext}</p>
      </div>

      <div>
        <h3>{joindonor.subheader}</h3>
        <p>{joindonor.paragraph}</p>
        <p>
          <span></span>
          {joindonor.number}
        </p>
        <input type="range" />
      </div>

      <div>
        <p>{joindonor.subfootertext}</p>
        <p>{joindonor.footertext}</p>
        <img src={joindonor.footertextimg} alt="Footer image" />
      </div>
    </section>
  );
}

Subdonation.propTypes = {
  joindonor: PropTypes.shape({
    joinheaderimg: PropTypes.string.isRequired,
    joinsubimg: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    subfootertext: PropTypes.string.isRequired,
    footertext: PropTypes.string.isRequired,
    footertextimg: PropTypes.string.isRequired,
  }).isRequired,
};

export default JoinDonation;

