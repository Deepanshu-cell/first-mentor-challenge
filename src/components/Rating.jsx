import React from "react";
import "./Ratings.css";
import star from "./icon-star.svg";

function Rating(props) {
  let ratingBtns = [1, 2, 3, 4, 5];
  let [ratingPressed, setRatingPressed] = React.useState(false);

  const setRatings = (rating) => {
    props.setRating(rating);
  };

  const setSubmit = () => {
    setRatingPressed(true);
    props.setSubmit(true);
  };
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
          {ratingBtns.map((rating) => {
            return (
              <button
                className="numButton"
                onClick={() => {
                  setRatings(rating);
                }}
              >
                {rating}
              </button>
            );
          })}
        </div>
        <button type="button" class="btn submitButton m-3" onClick={setSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Rating;
