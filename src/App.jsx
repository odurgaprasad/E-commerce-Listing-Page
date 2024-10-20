import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList";
import AddToCartModal from "./components/AddToCartModal";
import ThankYou from "./components/ThankYou";
import FilterSidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <div className="flex">
          <FilterSidebar className="w-1/4" />
          <div className="w-3/4">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </div>
        </div>
        <AddToCartModal />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
