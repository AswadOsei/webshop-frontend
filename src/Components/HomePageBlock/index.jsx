// import { NavLink } from "react-router-dom";
import "./styles.css";

export default function HomePageBlock(props) {
  return (
    <div className="product-card">
      <div>
        <br />
        <br />
        {/* <div className="hp-productinfo"> */}
        <img className="image" src={props.image} alt={props.title} />
        <h4>Article Name:{props.title} </h4>
        <p> Description : {props.description}</p>
        <p> Price : {props.price}</p>
        <p> Rating : {props.rating}</p>
        {/* </div> */}
      </div>
    </div>
  );
}
