// import "./styles.css";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Description = (props) => {
//   const params = useParams();
//   const [description, setDescription] = useState([]);

//   const descInfo = useEffect(() => {
//     const fetchdescrip = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:4000/products/${params.id}`
//         );
//         setDescription(response.description);
//         console.log(response.description);
//       } catch (e) {
//         console.log(e.message);
//       }
//     };
//     fetchdescrip();
//   }, []);

//   console.log("description...........", description);

//   // const descInfo = (id) => {
//   //   const descs = props.product.map((prod) => {
//   //     if (prod.id === id) {
//   //       return prod.description;
//   //     } else {
//   //       return "There is no description available";
//   //     }
//   //   });
//   //   props.setProduct(descs);
//   // };

//   return (
//     <div>
//       <div className="description">
//         §<button onClick={descInfo}>Description</button>
//       </div>
//     </div>
//   );
// };

// export default Description;
