import "./App.css";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import ProductsPaige from "./Pages/ProductsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/products" element={<ProductsPaige />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
