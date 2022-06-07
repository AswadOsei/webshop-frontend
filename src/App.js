import "./App.css";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/shop" element={<ProductsPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
