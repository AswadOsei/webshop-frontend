import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ProductDetails from "../../Components/ProductDetail";

import Banner from "../../Components/Banner";

import AddReviewComponent from "../../Components/AddReview/AddReview";

const DetailsPage = () => {
  const params = useParams();

  const [product, setProduct] = useState([]);

  const [reviewOpen, setReviewOpen] = useState(false);

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

  const { id, title, price, description, rating, mainImage } = product;

  console.log("descriptionnnnn........", product);

  // reviewOpen && <AddReviewComponent === reviewOpen ? <AddReviewComponent
  return (
    <div className="Details">
      <div className="top-banner">
        <Banner />
      </div>

      {product ? (
        <ProductDetails
          title={title}
          price={price}
          description={description}
          rating={rating}
          image={mainImage}
        />
      ) : (
        <p>Loading ...</p>
      )}
      <button onClick={() => setReviewOpen(!reviewOpen)}>read comments</button>

      {reviewOpen && <AddReviewComponent id={id} />}
    </div>
  );
};

export default DetailsPage;
