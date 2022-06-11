import { useState, useEffect } from "react";
import axios from "axios";
import HomePageBlock from "../../Components/HomePageBlock";
import Banner from "../../Components/Banner";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import FilterContent from "../../Components/FilterPageItems";
import("./styles.css");

function compare_name(product_a, product_b) {
  return product_a.title.localeCompare(product_b.title);
}

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filterItems, setFilterItems] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setProducts(response.data);

        const categoriesResponse = await axios.get(
          "http://localhost:4000/categories"
        );
        setCategories(categoriesResponse.data);
      } catch (error) {}
    };
    getAllProducts();
  }, []);

  // const changeValue = setFilterItems(!filterItems);
  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((item) => selectedCategories.includes(item.id));

  // const filterFunction = filterItems ? setSelectedCategories() :

  const productsSorted = [...products].sort(compare_name);
  console.log("Filtered products", filteredProducts);
  console.log("filter items", filterItems);

  //how can we update the state of selectedCategories?
  return (
    <div className="homepage-container">
      <div className="top-banner">
        <Banner />
      </div>
      <div className="homepage-content">
        <div className="sidebar">
          {categories.map((categorie) => (
            <div>
              <input
                type="checkbox"
                // value={selectedCategories}
                // onChange={setSelectedCategories()}
              />
              <label> {categorie.title} </label>
            </div>
          ))}
        </div>
        <div className="product-info">
          {filteredProducts.map((product) => (
            <HomePageBlock
              image={product.mainImage}
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              rating={product.rating}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
