import { useState, useEffect } from "react";
import axios from "axios";
import HomePageBlock from "../../Components/HomePageBlock";

function compare_name(product_a, product_b) {
  return product_a.title.localeCompare(product_b.title);
}

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setProducts(response.data);
      } catch (error) {}
    };
    getAllProducts();
  }, []);

  const updateFilter = (e) => {
    setFilter(e.target.value);
  };

  const productsSorted = [...products].sort(compare_name);
  return (
    <div className="homepage-container">
      <div className="top-banner">Banner</div>
      <div className="homepage-content">
        <div className="sidebar">
          {/* <input type="text" value={filter} onChange={updateFilter} />
          {products ? (
            products
              .filter((sidebar) => sidebar.title.startsWith(filter))
              .map((sidebar, id) => (
                <HomePageBlock key={id} title={sidebar.title} />
              ))
          ) : (
            <p>Loading ..</p>
          )} */}
        </div>
        <div className="product-info">
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
      </div>
    </div>
  );
};

export default HomePage;
