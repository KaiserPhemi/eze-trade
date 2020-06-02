// react libraries
import React from "react";

// styles
import "./_ProductPage.scss";

// components
import ProductItem from "./ProductItem";
import ProductListSideBar from "./ProductPageSideBar";

/**
 * desc lists the products
 */
const ProductPage = () => {
  return <div className="product-section">
    <div className="section-side-bar"><ProductListSideBar /></div>
    <div className="section-list"><ProductItem /></div>
  </div>;
};

export default ProductPage;
