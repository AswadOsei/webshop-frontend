import "./styles.css";
const ProductDetails = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.image} alt="details" width="300" />
      <h3>{props.price}</h3>
      <h3>{props.description}</h3>
      <h3>{props.rating}</h3>
    </div>
  );
};

export default ProductDetails;
