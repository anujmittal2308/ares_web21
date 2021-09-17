import React from "react";
import Data from "./Data";
import Card from "./Card.jsx";
import "./style/App.css";
function createCard(Data) {
  return (
    <div className="term">
      <Card
        id={Data.id}
        img={Data.img}
        name={Data.name}
        meaning={Data.meaning}
      />
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>The Pillars of our Team</span>
      </h1>

      <dl className="dictionary">{Data.map(createCard)}</dl>
    </div>
  );
}

export default App;