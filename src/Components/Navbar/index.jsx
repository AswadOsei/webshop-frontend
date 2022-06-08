import "./styles.css";
import { BsSuitHeart } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";

import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar-container">

      <div className="navbar-left-container">
        <div className="small-left-container">
          <p>The Shop</p>
          <div>
            {" "}
            <NavLink to={"./"}>Home</NavLink>{" "}
          </div>
          <div>
            <NavLink to={"./"}>Products</NavLink>
          </div>
          <div>
            {" "}
            <NavLink to={"./"}>Blog</NavLink>
          </div>{" "}
          <div>
            <NavLink to={"./"}>Shop</NavLink>{" "}
          </div>
          <div>
            <NavLink to={"./"}>Contact</NavLink>
          </div>
        </div>
        <div className="small-right-container">
          <input className="input" type="text" placeholder="searchbar"></input>
        </div>
      </div>
      <div className="navbar-right-container">
        <div className="iconProductCard">
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
