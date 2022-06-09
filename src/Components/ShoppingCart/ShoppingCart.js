import { useState } from "react";
export default function ShoppingCart(props) {
  const [cartItems, setCartItems] = useState([]);
  const addProduct = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <div>
      <div>
        {props.title}
        <br />
        <div>
          <br />
          <br />

          <button
            onClick={() => {
              addProduct(props.title);
            }}
          >
            Add to shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// const exist = cartItems.find(
//   (productInCart) => productInCart.id === product.id ???
// );
// if (exist) {
//   setCartItems(
//     cartItems.map((productInCart) =>
//       productInCart.id === product.id
//         ? { ...exist, quantity: exist.quantity + 1 }
//         : productInCart
//     )
//   );
// } else {
