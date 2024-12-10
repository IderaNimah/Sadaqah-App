function Profile() {
  return (
    <div className="myProfile">
      <h2>My Profile</h2>
      <div className="subProfile">
        <img src="./assets/profile-image.png" alt="profile" />
        <h4>Edit Profile Image</h4>
      </div>

      <div className="profileField">
        <h4>Field Name</h4>
        <input type="text" placeholder="@ ijtas_muiz"/>
      </div>
      <div className="profilePin">
        <h5>Pin</h5>
        <p>
          Your pin is set, to change your pin click the change pin button below.
        </p>
        <h4>Change Pin</h4>
      </div>

      <div className="profileButton">
        <button>Save Changes</button>
      </div>
    </div>
  );
}

export default Profile;
