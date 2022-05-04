import React from "react";
import "./Ratings.css";
import star from "./icon-star.svg";

function Rating() {
  return (
    <div className="ratingCard container">
      <div className="card">
        <button className="starButton">
          <img src={star} alt="" className="starImg" />
        </button>
        <h2 className="heading">How did we do?</h2>
        <div className="desc text-start p-1">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!{" "}
        </div>
        <div className="btnContainer">
          {" "}
          <button type="button" class="btn btn-secondary numButton mx-2">
            1
          </button>
          <button type="button" class="btn btn-secondary numButton mx-2">
            2
          </button>
          <button type="button" class="btn btn-secondary numButton mx-2">
            3
          </button>
          <button type="button" class="btn btn-secondary numButton mx-2">
            4
          </button>
          <button type="button" class="btn btn-secondary numButton mx-2">
            5
          </button>
        </div>
        <button type="button" class="btn submitButton m-3">
          SUBMIT
        </button>

      </div>
    </div>
  );
}

export default Rating;
