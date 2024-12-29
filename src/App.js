import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from "./components/ProductPage";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import MyOrdersPage from "./components/MyOrdersPage";

function App() {
  const [activeSection, setActiveSection] = React.useState("all categories");

  return (
    <Router>
      <Navbar setActiveSection={setActiveSection} />
      <Routes>
        <Route path="/" element={<ProductPage activeSection={activeSection} setActiveSection={setActiveSection} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/myorders" element={<MyOrdersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
