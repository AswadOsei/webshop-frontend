export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const addProduct = (product) => {
    // const exist = cartItems.find(
    //   (productInCart) => productInCart.id === product.id
    // );
    // if (exist) {
    //   setCartItems(
    //     cartItems.map((productInCart) =>
    //       productInCart.id === product.id
    //         ? { ...exist, qty: exist.qty + 1 }
    //         : productInCart
    //     )
    //   );
    // } else {
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
              addProduct();
            }}
          >
            Add to shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
}
