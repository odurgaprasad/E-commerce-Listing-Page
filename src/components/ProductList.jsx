import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { CartContext } from "../context/CartContext";
import { plantData } from "../Data";

export default function ProductList() {
  const { currentPage, setCurrentPage } = useContext(CartContext);

  const productsPerPage = 9;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = plantData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(plantData.length / productsPerPage);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-4 min-w-fit">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
