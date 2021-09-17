import React from "react";
import Data from "./Data";
function Card(pro) {
  return (
    <div>
      <div className="term">
        <dt>
          <p>{pro.id}</p>
          
           <img src={pro.img} alt="some img" />
          
          <span>{pro.name}</span>
        </dt>
        <dd>{pro.meaning}</dd>
      </div>
    </div>
  );
}
export default Card;