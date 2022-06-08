import "./styles.css";
const ProductDetails = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <img src={props.image} alt="details" width="300" />
      <p>{props.price}</p>
      <p>{props.description}</p>
      <p>{props.rating}</p>
    </div>
  );
};

export default ProductDetails;
