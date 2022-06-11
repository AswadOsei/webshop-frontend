import "./styles.css";
const ProductDetails = (props) => {
  return (
    <div className="detailsCard">
      <img
        className="card__img"
        src={props.image}
        width="200px"
        alt="Details"
      />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__rating">{props.rating}</p>
        <p className="card__price">€{props.price}</p>
        <p className="card__description">{props.description}</p>
        <button className="card__btn">Add to cart</button>
        <button className="card__btn__favorite">Favorite</button>
      </div>
    </div>
  );
};

export default ProductDetails;
