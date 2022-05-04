import "./App.css";
import React from "react";
import Rating from "../src/components/Rating.jsx";
import Thankyou from "../src/components/Thankyou.jsx";

function App() {
  let [isSubmit, setSubmit] = React.useState(false);

  let [rating, setRating] = React.useState(0);

  const getSubmit = () => {};
  return (
    <div className="App">
      {isSubmit == false ? (
        <Rating setSubmit={setSubmit} setRating={setRating}></Rating>
      ) : (
        <Thankyou rating={rating}></Thankyou>
      )}
    </div>
  );
}

export default App;
