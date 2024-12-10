function AddCard() {
  return (
    <div className="addCard">
      <h2>My Cards</h2>
      <div className="cards">
        <BlueCard />
        <OrangeCard />
        <EmptyCard />
      </div>
    </div>
  );
}

function BlueCard() {
  return (
    <div className="bluecomp">
    <div className="blueCard">
      <img src="./assets/mastercard logo.png" alt="mastercard img" />

      <h2> **** **** **** 3456</h2>

      <div className="sublue">
        <div>
          <p>Card Holder</p>
          <h3>Muiz Olatunji</h3>
        </div>
        <div>
          <p>Expiry Date</p>
          <h3>04/2025</h3>
        </div>
      </div>
      
    </div>
    <div className="trash">
    <img src="./assets/trash.png" alt="trash" />
    <p>Delete</p>
  </div>
    </div>
  );
}

function OrangeCard() {
  return (
    <div className="orangecomp">

    <div className="orangeCard">
      <img src="./assets/Visa logo.png" alt="mastercard img" />

      <h2> **** **** **** 4543</h2>

      <div className="suborange">
        <div>
          <p>Card Holder</p>
          <h3>Muiz Olatunji</h3>
        </div>
        <div>
          <p>Expiry Date</p>
          <h3>04/2025</h3>
        </div>
      </div>
      
    </div>
    <div className="trash">
        <img src="./assets/trash.png" alt="trash" />
        <p>Delete</p>
      </div>
    </div>
  );
}

function EmptyCard() {
  return (
    <div className="emptyCard">
        <div className="center">

      <img src="./assets/card.png" alt="card" />
      <p>Add a new card</p>
        </div>
    </div>
  );
}
export default AddCard;
