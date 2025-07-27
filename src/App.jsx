import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomeRoleSelect from "./components/HomeRoleSelect";
import Navbar from "./components/Navbar";
import SupplierList from "./components/SupplierList"; // Vendor Supplier List with search

// Placeholder components for vendor feature pages
const VendorCompare = () => (
  <div className="p-8">
    <h1 className="text-2xl font-semibold mb-4">Compare Prices</h1>
    <p>Compare price and quality of raw materials from verified suppliers.</p>
  </div>
);

const VendorPlaceOrder = () => (
  <div className="p-8">
    <h1 className="text-2xl font-semibold mb-4">Place Order</h1>
    <p>Place an order for raw materials from your chosen suppliers.</p>
  </div>
);

const VendorOrders = () => (
  <div className="p-8">
    <h1 className="text-2xl font-semibold mb-4">Order Tracking</h1>
    <p>Track the status of your placed orders here.</p>
  </div>
);

const VendorNotifications = () => (
  <div className="p-8">
    <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
    <p>Get notifications about your orders and deliveries.</p>
  </div>
);

// Placeholder components for seller feature pages
const SellerProducts = () => (
  <div className="p-8">
    <h1 className="text-2xl font-semibold mb-4">Product Catalog Management</h1>
    <p>Manage your products here.</p>
  </div>
);

const SellerOrders = () => (
  <div className="p-8">
    <h1 className="text-2xl font-semibold mb-4">Manage Orders</h1>
    <p>View and manage all incoming orders.</p>
  </div>
);

const SellerNotifications = () => (
  <div className="p-8">
    <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
    <p>View notifications about new orders and updates.</p>
  </div>
);

const SellerProfile = () => (
  <div className="p-8">
    <h1 className="text-2xl font-semibold mb-4">My Profile & Rating</h1>
    <p>View and edit your profile and ratings here.</p>
  </div>
);

// Main app component for routing and layout
const App = () => {
  // We need Navbar to show on all dashboard pages, but NOT on landing page
  // Using useLocation() inside App to decide dynamically
  // Because Router is top-level, we wrap a component internally
  const LocationAwareApp = () => {
    const location = useLocation();
    const showNavbar = location.pathname !== "/";

    return (
      <>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<HomeRoleSelect />} />

          {/* Vendor routes */}
          <Route path="/vendor/suppliers" element={<SupplierList />} />
          <Route path="/vendor/compare" element={<VendorCompare />} />
          <Route path="/vendor/place" element={<VendorPlaceOrder />} />
          <Route path="/vendor/orders" element={<VendorOrders />} />
          <Route path="/vendor/notifications" element={<VendorNotifications />} />

          {/* Seller routes */}
          <Route path="/seller/products" element={<SellerProducts />} />
          <Route path="/seller/orders" element={<SellerOrders />} />
          <Route path="/seller/notifications" element={<SellerNotifications />} />
          <Route path="/seller/profile" element={<SellerProfile />} />

          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <LocationAwareApp />
    </Router>
  );
};

export default App;
