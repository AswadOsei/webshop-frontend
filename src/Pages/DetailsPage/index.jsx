import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ProductDetails from "../../Components/ProductDetailPage";
import Banner from "../../Components/Banner";
import Description from "../../Components/Description";

const DetailsPage = () => {
  const params = useParams();

  const [product, setProduct] = useState([]);
  const [desc, setDesc] = useState([]);

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

  const descInfo = useEffect(() => {
    const fetchdescrip = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setDesc(response.data.description);
        console.log(
          "response.description...............",
          response.data.description
        );
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchdescrip();
  }, []);

  const { title, price, description, rating, mainImage } = product;

  console.log("descriptionnnnn........", product);

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
        <h3>Product not found</h3>
      )}

      {/*<div className="description">
        {desc.map((des) => (
          <Description description={des.description} descInfo={des} />
        ))}
        </div>*/}
    </div>
  );
};

export default DetailsPage;
