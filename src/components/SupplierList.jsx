import React, { useState } from "react";

const SupplierList = () => {
  // Sample suppliers data (uncomment for testing)
  /*
  const sampleSuppliers = [
    { id: 1, name: "FreshGrains Co", location: "Delhi", verified: true, rating: 4.5 },
    { id: 2, name: "Organic Spices", location: "Mumbai", verified: false, rating: 3.8 },
    { id: 3, name: "Happy Veggies", location: "Bangalore", verified: true, rating: 4.9 },
  ];
  */

  // Start with empty array for your no mock data request
  const [suppliers, setSuppliers] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Filter suppliers by name with case insensitivity
  const filteredSuppliers = suppliers.filter((s) =>
    s.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleViewProfile = (supplier) => {
    alert(`Viewing profile for ${supplier.name}`);
    // In future: navigate(`/vendor/supplier/${supplier.id}`)
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Verified Suppliers Nearby</h1>

      <input
        type="text"
        placeholder="Search suppliers by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full mb-6 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredSuppliers.length === 0 ? (
        <p className="text-gray-500 text-center mt-16 text-lg">No suppliers found.</p>
      ) : (
        <ul className="space-y-4 max-h-[60vh] overflow-y-auto">
          {filteredSuppliers.map((supplier) => (
            <li
              key={supplier.id}
              className="p-4 flex justify-between items-center border rounded shadow hover:shadow-md cursor-pointer"
              onClick={() => handleViewProfile(supplier)}
            >
              <div>
                <h2 className="text-xl font-medium">{supplier.name}</h2>
                <p className="text-gray-600">{supplier.location}</p>
              </div>
              <div className="flex items-center space-x-4">
                {supplier.verified && (
                  <span className="text-green-600 font-semibold flex items-center">
                    ✓ Verified
                  </span>
                )}
                <span className="text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 inline-block ${
                        i < Math.floor(supplier.rating) ? "fill-current" : "stroke-current"
                      }`}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SupplierList;
