import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { openModal } = useContext(CartContext);

  return (
    <div className="border p-4 rounded">
      <div>
        <img
          src={product.image}
          alt={product.plantName}
          className="h-96 w-full"
        />
        <h3 className="bg-green-600 text-white font-semibold text-center py-2">
          View Product
        </h3>
        <h3 className="text-lg font-bold py-1">{product.plantName}</h3>
        <p className="text-sm font-light py-1">{product.placement}</p>
        <div className="flex items-center gap-6">
          <p className="text-stone-700 py-1 line-through">
            {(product.price + 40).toFixed()}Rs
          </p>
          <p className="text-green-500 py-1">{product.price}Rs</p>
        </div>
        <button
          onClick={() => openModal(product)}
          className="bg-green-500 text-white p-2 my-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
