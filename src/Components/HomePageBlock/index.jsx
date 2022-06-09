import { NavLink } from "react-router-dom";
import "./styles.css";
import { BsSuitHeart } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";

export default function HomePageBlock(props) {
  return (
    <div className="product-card">
      <div>
        <br />
        <br />

        <div className="image-box">
          <img className="image" src={props.image} alt={props.title} />
        </div>
        <div className="hp-productinfo">
          <h4>{props.title} </h4>
          <p> {props.description}</p>
          <p> Price : {props.price} €</p>
          <p> Rating : {props.rating}</p>
          <NavLink to="/user">
            <FiUser />
          </NavLink>
          <NavLink to="/shoppingcard">
            <TiShoppingCart />
          </NavLink>
          <NavLink to="/favourites">
            <BsSuitHeart />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
