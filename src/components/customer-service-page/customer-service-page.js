import React from "react";
import CustomerCategories from "../customer-categories";
import CustomerService from "../customer-service";
import "./customer-service-page.css";
const CustomerServicePage = () => {
  return (
    <div className="customer-service-page">
      <CustomerCategories />
      <CustomerService />
    </div>
  );
};
export default CustomerServicePage;
