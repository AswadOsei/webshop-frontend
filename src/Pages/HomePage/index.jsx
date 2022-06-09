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
  const [filter, setFilter] = useState("");
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

  const updateFilter = (e) => {
    setFilter(e.target.value);
  };
  // const rateStars = (rating) => {
  //   const roundedRating = Math.round(rating);
  //   if ((roundedRating = 1)) {
  //     return <BsStarFill />;
  //   }
  //   if ((roundedRating = 2)) {
  //     return <BsStarFill />;
  //   }
  //   if ((roundedRating = 3)) {
  //     return <BsStarFill />;
  //   }
  //   if ((roundedRating = 4)) {
  //     return <BsStarFill />;
  //   }
  //   if ((roundedRating = 5)) {
  //     return <BsStarFill />;
  //   } else {
  //     return "Still not rated";
  //   }
  // };

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((item) => selectedCategories.includes(item));

  const productsSorted = [...products].sort(compare_name);
  return (
    <div className="homepage-container">
      <div className="top-banner">
        <Banner />
      </div>
      <div className="homepage-content">
        <div className="sidebar">
          {categories.map((categorie) => (
            <div>
              <input type="checkbox" />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
