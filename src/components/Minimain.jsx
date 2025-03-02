function Minimain() {
  return (
    <>
      <AllMini />
      <Joint />
    </>
  );
}

function AllMini() {
  return (
    <div className="minii">
      <div className="mini">
        <div className="sub-mini">
          <img src="./assets/profile-add.png" alt="profile add" />
          <p>
            You need to complete your profile by uploading a profile picture
          </p>
        </div>

        <div className="update">
          <a href="#" className="href">
            Update Profile
          </a>
        </div>
      </div>
    </div>
  );
}

function Joint() {
  return (
    <div className="joint">
      <div className="donation">
        <div className="don">
          <h2>Create a donation group</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing eift ed Etiam eu
            turpis molestie, dictum est.
          </p>
          <div className="donlink">
            <a href="#" className="donhref">Create Group</a>
          </div>
        </div>
        <div>
          <img src="./assets/Love.png" alt="Love" className="don-img" />
        </div>
      </div>

      <div className="refer">
        <div className="ref">
          <h2>Refer a friend</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing eift ed Etiam eu
            turpis molestie, dictum est.
          </p>
          <div className="referlink"> 
            <a href="#" className="referhref">Refer a friend</a>
          </div>
        </div>
        <div className="referimg">
          <img src="./assets/Illustration.png" alt="Love" />
        </div>
      </div>
    </div>
  );
}

export default Minimain;
