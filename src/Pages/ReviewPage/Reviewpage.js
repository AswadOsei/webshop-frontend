// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import AddReviewComponent from "../../Components/AddReview/AddReview";

// export default function ReviewPage() {
//   <AddReviewComponent />;
//   const routeParams = useParams();
//   const [product, setProduct] = useState([]);
//   const [reviewsAdded, setReviewsAdded] = useState("");

//   useEffect(() => {
//     const fetchReviews = async (req, res, next) => {
//       try {
//         const getReviews = await axios.get(
//           `http://localhost:4000/reviews/${props.id}`
//         );
//         console.log("DetailsPage......", getReviews.data);
//         setReviewsAdded(getReviews.data);
//       } catch (e) {
//         next(e);
//       }
//     };
//     fetchReviews();
//   }, []);

//   return (
//     <div>
//       <AddReviewComponent
//         id={routeParams.id}
//         addReview={(review) => {
//           console.log("Let's add a new player with the name:", review);
//         }}
//       />
//     </div>
//   );
// }

// export { ReviewPage };
