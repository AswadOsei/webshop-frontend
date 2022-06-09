import "./styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ProductDetails from "../../Components/ProductDetailPage";

const DetailsPage = () => {
  const params = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async (req, res, next) => {
      try {
        const getProduct = await axios.get(
          `http://localhost:4000/products/${params.id}`
        );
        console.log("DetailsPage......", getProduct.data);
        setProduct(getProduct.data);
      } catch (e) {
        next(e);
      }
    };

    fetchProduct();
  }, []);

  const { title, price, description, rating, mainImage } = product;

  return (
    <div className="wrapper">
      <div className="details">
        <div className="product-details" style={{ padding: "0 15px" }}>
          {product ? (
            <ProductDetails
              title={title}
              price={price}
              description={description}
              rating={rating}
              image={mainImage}
            />
          ) : (
            <h3>Product not found</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
