import { useState } from "react";
import axios from "axios";

export default function AddReviewComponent(props) {
  const [review, setReview] = useState("");

  const addReview = async () => {
    const response = await axios.post(
      `http://localhost:4000/reviews/${props.productId}`,
      { review }
    );
    console.log(response.data);
  };
  return (
    <div className="addReview">
      <div>
        {props.title}
        <br />
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
