import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ProductDetails from "../../Components/ProductDetailPage";
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

  const { title, price, description, rating, mainImage } = product;

  return (
    <div className="Details">
      <div className="Banner"></div>
      <h3>This is detailspage</h3>
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
      {!reviewOpen ? (
        <button
          className="buttonComment"
          onClick={() => setReviewOpen(!reviewOpen)}
        >
          Leave a comment
        </button>
      ) : (
        <AddReviewComponent title={product.title} productId={product.id} />
      )}
    </div>
  );
};

export default DetailsPage;
