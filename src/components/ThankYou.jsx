import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import plant from "../assets/plant.png";

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000); // Redirect to homepage after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigate]);

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 relative">
      {/* Close button */}
      <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg">
        &times;
      </button>

      {/* Cart Header */}
      <h2 className="text-gray-600 text-center text-sm mb-4">Your Cart</h2>
      <hr className="mb-6" />

      {/* Congratulations Message */}
      <div className="text-center">
        <h3 className="text-green-600 font-bold text-xl mb-2">
          Congratulations
        </h3>
        <p className="text-black font-bold text-lg mb-6">Order Placed!</p>

        {/* Plant Icon */}
        <div className="flex justify-center mb-6">
          <img src={plant} alt="Plant Icon" className="h-24 w-24" />
        </div>

        {/* Thank You Message */}
        <p className="text-gray-700 text-sm mb-8">
          Thank you for choosing Chaperone services. We will soon get in touch
          with you!
        </p>

        {/* Continue Shopping Button */}
        <Link to="/" className="block">
          <button className="bg-green-700 text-white text-sm font-bold py-2 px-4 rounded-md w-full hover:bg-green-800">
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
