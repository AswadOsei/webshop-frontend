import { useState, useEffect } from "react";
import axios from "axios";

export default function AddReviewComponent(props) {
  const [review, setReview] = useState("");
  const [reviewsAdded, setReviewsAdded] = useState("");

  // in axios.post, 1st parameter is the URL and the 2nd is the HTTP request body
  // addReview send request body {review} which is the value of the textarea
  const addReview = async () => {
    const response = await axios.post(
      `http://localhost:4000/reviews/${props.id}`,
      { review }
    );
    console.log(response.data);
  };

  //we define our useEffect in the rendering of our component AddReviewComponent
  //to call setReviewsAdded with the data get route
  useEffect(() => {
    const fetchReviews = async (req, res, next) => {
      try {
        const getReviews = await axios.get(
          `http://localhost:4000/reviews/${props.id}`
        );
        console.log("All reviews", getReviews.data);
        setReviewsAdded(getReviews.data);
      } catch (e) {
        next(e);
      }
    };
    fetchReviews();
  }, []);
  // onChange of the text area, setReview update the state of review
  // onClick addReview is called to send a http request with the actual value of textarea, which is review, as request body
  return (
    <div className="addReview">
      <div>
        {props.title}
        <br />
        Reviews : {[reviewsAdded.data]}
        <div className="reviewContainer">
          <br />
          Share your opinion
          <br />
          <textarea
            className="reviewInput"
            type="text"
            placeholder="Comment"
            value={review}
            onChange={(event) => {
              setReview(event.target.value);
              console.log(event.target.value);
            }}
          />{" "}
          <button
            onClick={() => {
              addReview();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
