import "./styles.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-left-box">
        <p>Products for every need, at the distance of a click.</p>
      </div>
      <div className="banner-right-box">
        <img
          className="girl-img"
          src="https://cdn.shopify.com/s/files/1/0565/8460/1770/files/Omslag_webshop_mobile_1500x.jpg?v=1651761197"
        />
      </div>
    </div>
  );
}
