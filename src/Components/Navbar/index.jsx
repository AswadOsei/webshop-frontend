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
          <div className="theShop">
            The <a style={{ color: "white" }}>Shop</a>
          </div>
          <div className="links">
            <NavLink to={"./"}>Home</NavLink>{" "}
          </div>
          <div className="links">
            <NavLink to={"./"}>Products</NavLink>
          </div>
          <div className="links">
            {" "}
            <NavLink to={"./"}>Blog</NavLink>
          </div>{" "}
          <div className="links">
            <NavLink to={"./"}>Shop</NavLink>{" "}
          </div>
          <div className="links">
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
          <NavLink to="/shoppingcart">
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
