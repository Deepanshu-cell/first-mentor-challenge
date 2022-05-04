import React from "react";
import "./Thankyou.css";
import thankyou from "./thankyou.svg";

function Rating(props) {
  return (
    <div className="ThankyouCard">
      <div className="card">
        <div className="imgContainer mx-auto ">
          <img src={thankyou} alt="" />
        </div>
        <div className="tagLineDiv p-2 mx-auto my-4">
          You selected {props.rating} out of 5
        </div>
        <h2 className="heading mx-auto my-2">Thank You!</h2>
        <div className="desc my-4 ">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </div>
      </div>
    </div>
  );
}

export default Rating;
