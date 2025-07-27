import React from "react";
import { useNavigate } from "react-router-dom";

const HomeRoleSelect = () => {
  const navigate = useNavigate();

  const handleVendorClick = () => {
    navigate("/vendor/suppliers");
  };

  const handleSellerClick = () => {
    navigate("/seller/products");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-10">
      <button
        onClick={handleVendorClick}
        className="bg-blue-600 text-white text-2xl font-semibold px-16 py-6 rounded-md shadow hover:bg-blue-700 transition"
      >
        I am a Street Vendor
      </button>
      <button
        onClick={handleSellerClick}
        className="bg-green-600 text-white text-2xl font-semibold px-16 py-6 rounded-md shadow hover:bg-green-700 transition"
      >
        I am a Supplier/Seller
      </button>
    </div>
  );
};

export default HomeRoleSelect;
