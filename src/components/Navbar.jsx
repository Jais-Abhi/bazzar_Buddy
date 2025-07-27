import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  // Show vendor navbar if path begins with /vendor, else show seller navbar
  const isVendor = pathname.startsWith("/vendor");
  const isSeller = pathname.startsWith("/seller");

  return (
    <nav className="bg-gray-100 py-3 px-6 flex gap-4 shadow">
      {isVendor && (
        <>
          <NavLink to="/vendor/suppliers" className="text-blue-700 font-medium">Suppliers</NavLink>
          <NavLink to="/vendor/compare" className="text-blue-700 font-medium">Compare Prices</NavLink>
          <NavLink to="/vendor/place" className="text-blue-700 font-medium">Place Order</NavLink>
          <NavLink to="/vendor/orders" className="text-blue-700 font-medium">Order Tracking</NavLink>
          <NavLink to="/vendor/notifications" className="text-blue-700 font-medium">Notifications</NavLink>
        </>
      )}
      {isSeller && (
        <>
          <NavLink to="/seller/products" className="text-green-700 font-medium">Product Catalog</NavLink>
          <NavLink to="/seller/orders" className="text-green-700 font-medium">Manage Orders</NavLink>
          <NavLink to="/seller/notifications" className="text-green-700 font-medium">Notifications</NavLink>
          <NavLink to="/seller/profile" className="text-green-700 font-medium">My Profile</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
