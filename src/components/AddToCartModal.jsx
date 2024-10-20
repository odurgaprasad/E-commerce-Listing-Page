import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function AddToCartModal() {
  const { isModalOpen, closeModal, selectedProduct, addToCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  if (!isModalOpen || !selectedProduct) return null;

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    // Confirm adding the product and navigate to thank-you page

    navigate("/thank-you", { state: { productName: selectedProduct.name } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay to blur the background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Modal content */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-lg font-bold">Add to Cart</h2>
        <p>{selectedProduct.name}</p>
        <div className="mt-4">
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white p-2 rounded"
          >
            Confirm
          </button>
          <button
            onClick={closeModal}
            className="bg-red-500 text-white p-2 rounded ml-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
