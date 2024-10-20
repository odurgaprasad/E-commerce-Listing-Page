import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    closeModal();
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isModalOpen,
        openModal,
        closeModal,
        selectedProduct,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
