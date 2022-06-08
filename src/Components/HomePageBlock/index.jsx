import { NavLink } from "react-router-dom";

export default function HomePageBlock(props) {
  return (
    <div>
      {" "}
      <div>
        <br />
        <br />
        <img src={props.image} alt={props.title} />
        <h2>Article Name:{props.title} </h2>
        <h2> Description : {props.description}</h2>
        <h2> Price : {props.price}</h2>
        <h2> Rating : {props.rating}</h2>
        {/* <div>
          <NavLink
            style={{ marginRight: 30 }}
            end
            to={`/Houses/${props.house}`}
          >
            <button>House:{props.house}</button>{" "}
          </NavLink>

          <NavLink to={`/details/${props.id}`}>
            <button>Read More</button>
          </NavLink>
        </div> */}
      </div>
    </div>
  );
}
