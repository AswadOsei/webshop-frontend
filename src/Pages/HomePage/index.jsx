import { useState, useEffect } from "react";
import axios from "axios";
import HomePageBlock from "../../Components/HomePageBlock";

function compare_name(product_a, product_b) {
  return product_a.title.localeCompare(product_b.title);
}

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setProducts(response.data);
      } catch (error) {}
    };
    getAllProducts();
  }, []);

  const productsSorted = [...products].sort(compare_name);
  return (
    <div>
      <h1>Home </h1>
      {productsSorted.map((product) => (
        <HomePageBlock
          key={product.id}
          title={product.title}
          image={product.mainImage}
          price={product.price}
          description={product.description}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default HomePage;
