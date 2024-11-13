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
        <h2>Create a donation group</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing eift ed Etiam eu
          turpis molestie, dictum est.
        </p>
        <div>
          <a href="#">Create Group</a>
        </div>
        <div>
          <img src="./assets/Love.png" alt="Love" />
        </div>
      </div>

      <div className="refer">
        <h2>Refer a friend</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing eift ed Etiam eu
          turpis molestie, dictum est.
        </p>
        <div>
          <a href="#">Refer a friend</a>
        </div>
        <div>
          <img src="./assets/Illustration.png" alt="Love" />
        </div>
      </div>
    </div>
  );
}

export default Minimain;
